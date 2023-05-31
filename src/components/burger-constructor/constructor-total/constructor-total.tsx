import React from "react";

import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";

import { burgerConstructorСheckout } from "../../../services/actions/order-details-actions";

import { useAppDispatch, useAppSelector } from "../../../hook/hooks";

import styles from "./constructor-total.module.sass";

interface IConstructorTotalProps {
  orderPrice: number;
  orderIngredients: string[];
}

const ConstructorTotal = (props: IConstructorTotalProps) => {
  const { orderPrice = 0, orderIngredients } = props;
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    if (user !== null) {
      dispatch(burgerConstructorСheckout(orderIngredients));
    } else {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className={`ml-4 mr-4 mt-10 ${styles.constructorTotal}`}>
      <div className={`${styles.constructorTotal__summ}`}>
        <span
          className={`text text_type_digits-medium ${styles.constructorTotal__summ_counter}`}
        >
          {orderPrice}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.constructorTotal__button}`}>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => handleOpenModal()}
          data-test="order-button"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default ConstructorTotal;
