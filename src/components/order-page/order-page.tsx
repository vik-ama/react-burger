import React, { useEffect, useMemo, useState } from "react";

import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useLocation, useParams } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "../../hook/hooks";

import {
  WS_CONNECTION_END,
  WS_CONNECTION_START,
} from "../../services/actions/socket-actions";

import { CREATED, DONE, PENDING } from "../../pages/feed/feed";

import { IIngredient } from "../../utils/types";

import { wsUrl } from "../../utils/api";

import styles from "./order-page.module.sass";

interface IOrderState {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

const OrderPage = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { id } = useParams();
  const [order, setOrder] = useState<IOrderState>({
    createdAt: "",
    ingredients: [],
    name: "",
    number: 0,
    status: "",
    updatedAt: "",
    _id: "",
  });
  const { ingredients, hasError, isLoading } = useAppSelector(
    (state) => state.burgerIngredients
  );

  const ordersAll = useAppSelector((state) => state.socket);
  const ordersMy = useAppSelector((state) => state.socketOrders);
  const ordersList =
    location.pathname.indexOf("/feed/") === 0
      ? ordersAll.orders
      : ordersMy.orders;

  const currentOrder = useMemo(() => {
    if (ordersList) {
      return ordersList.find((order) => order._id === id);
    }
  }, [ordersList, id]);

  //console.log(order);

  useEffect(() => {
    if (currentOrder) {
      setOrder({
        createdAt: currentOrder.createdAt,
        ingredients: currentOrder.ingredients,
        name: currentOrder.name,
        number: currentOrder.number,
        status: currentOrder.status,
        updatedAt: currentOrder.updatedAt,
        _id: currentOrder._id,
      });
    }
  }, [currentOrder]);

  const orderStatus = () => {
    if (order.status === CREATED) {
      return "Создан";
    } else if (order.status === PENDING) {
      return "Готовится";
    } else if (order.status === DONE) {
      return "Выполнен";
    }
  };

  //@ts-ignore
  const orderIngredients: IIngredient[] = useMemo(() => {
    return order.ingredients
      .map((id) => {
        return ingredients.find(
          (ingredient: IIngredient) => ingredient._id === id
        );
      })
      .filter((ingredient) => ingredient);
  }, [ingredients, order]);

  const ingredientsUnique = useMemo(() => {
    return Array.from(new Set<IIngredient>(orderIngredients));
  }, [orderIngredients]);

  const countIngredients = useMemo(() => {
    const counts = order?.ingredients.reduce(
      (acc: { [a: string]: number }, i) => {
        // eslint-disable-next-line no-prototype-builtins
        if (acc.hasOwnProperty(i)) {
          acc[i] += 1;
        } else {
          acc[i] = 1;
        }
        return acc;
      },
      {}
    );
    return counts;
  }, [currentOrder, orderIngredients]);

  const orderSumm = useMemo(() => {
    let totalSumm = 0;
    order?.ingredients.forEach((id) => {
      const ingredient = ingredientsUnique.find((item) => item._id === id);
      if (ingredient) {
        totalSumm += ingredient.price;
      }
    });
    return totalSumm;
  }, [ingredientsUnique, order]);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: `${wsUrl}/orders/all`,
    });
    return () => {
      dispatch({ type: WS_CONNECTION_END, payload: "disconnect" });
    };
  }, [dispatch]);

  return (
    <div className={styles.orderPage}>
      <div className={styles.orderPage__container}>
        <div
          className={`text text_type_digits-default ${styles.orderPage__number}`}
        >
          #{order.number}
        </div>
        <div
          className={`text text_type_main-medium mt-10 ${styles.orderPage__title}`}
        >
          {order.name}
        </div>
        <div
          className={`text text_type_main-default mt-3 ${styles.orderPage__status_active}`}
        >
          {orderStatus()}
        </div>
        <div
          className={`text text_type_main-medium mt-15 ${styles.orderPage__compound}`}
        >
          Состав:
        </div>
        <div className={`mt-6 custom-scroll ${styles.orderPage__list}`}>
          {ingredientsUnique.map((orderIngredient: IIngredient) => {
            return (
              <div className={`${styles.orderPage__item}`} key={uuidv4()}>
                <div className={`${styles.orderPage__item_image}`}>
                  <span>
                    <img src={orderIngredient?.image} alt="" />
                  </span>
                </div>
                <div className={`${styles.orderPage__item_title}`}>
                  {orderIngredient?.name}
                </div>
                <div className={`${styles.orderPage__item_count}`}>
                  <span className="text text_type_digits-default">
                    {countIngredients
                      ? `${countIngredients[orderIngredient._id]}`
                      : ""}
                    x {orderIngredient?.price}
                  </span>
                  <span>
                    <CurrencyIcon type="primary" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`mt-10 ${styles.orderPage__summ}`}>
          <div
            className={`text text_type_main-default text_color_inactive ${styles.orderPage__summ_datetime}`}
          >
            <FormattedDate date={new Date(order.createdAt)} />
          </div>
          <div className={`${styles.orderPage__summ_count}`}>
            <span className="text text_type_digits-default">{orderSumm}</span>
            <span>
              <CurrencyIcon type="primary" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
