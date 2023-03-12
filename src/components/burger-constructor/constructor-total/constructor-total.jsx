import React, { useState } from "react";
import styles from "./constructor-total.module.sass";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
const ConstructorTotal = (props) => {
  const { orderPrice = 0, openModal } = props;

  const handleOpenModal = () => {
    openModal(true);
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
          onClick={handleOpenModal}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

ConstructorTotal.propTypes = {
  orderPrice: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ConstructorTotal;
