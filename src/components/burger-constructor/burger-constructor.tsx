import React, { useMemo } from "react";

import { useNavigate } from "react-router-dom";

import Modal from "../modal/modal";

import { IIngredient } from "../../utils/types";

import { useAppDispatch, useAppSelector } from "../../hook/hooks";

import { burgerConstructorClear } from "../../services/actions/order-details-actions";

import ConstructorElements from "./constructor-elements/constructor-elements";
import ConstructorTotal from "./constructor-total/constructor-total";
import ConstructorDetails from "./constructor-details/constructor-details";
import styles from "./burger-constructor.module.sass";

interface IBurgerConstructorProps {
  isLoading: boolean;
  hasError: boolean;
}

const BurgerConstructor = (props: IBurgerConstructorProps) => {
  const { isLoading, hasError } = props;

  const burgerConstructor = useAppSelector((state) => state.burgerConstructor);
  const orderDetails = useAppSelector((state) => state.orderDetails);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(burgerConstructorClear());
    navigate(-1);
  };

  const orderPrice = useMemo<number>(() => {
    let price = 0;
    if (burgerConstructor.bun) {
      price += burgerConstructor.bun.price * 2;
    }
    if (burgerConstructor.ingredients.length !== 0) {
      price += burgerConstructor.ingredients.reduce(
        (sum, item) => sum + item.price,
        0
      );
    }
    return price;
  }, [burgerConstructor]);

  const orderIngredients = useMemo<string[]>(() => {
    const orderIngredientsArray: string[] = [];
    if (burgerConstructor.bun) {
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    if (burgerConstructor.ingredients.length !== 0) {
      burgerConstructor.ingredients.forEach((item: IIngredient) => {
        orderIngredientsArray.push(item._id);
      });
    }
    if (burgerConstructor.bun) {
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    return orderIngredientsArray;
  }, [burgerConstructor]);

  return (
    <section
      className={`mt-25 ${styles.burgerConstructor}`}
      data-test="burger-constructor"
    >
      {orderDetails.order !== null && orderDetails.order.success && (
        <Modal onClose={handleCloseModal}>
          <ConstructorDetails
            orderNumber={orderDetails.order.order.number}
            orderName={orderDetails.order.name}
          />
        </Modal>
      )}
      {!isLoading && (
        <>
          <ConstructorElements />
          <ConstructorTotal
            orderPrice={orderPrice}
            orderIngredients={orderIngredients}
          />
        </>
      )}
    </section>
  );
};

export default BurgerConstructor;
