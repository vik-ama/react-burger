import React from "react";
import styles from "./constructor-total.module.sass";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { openModal } from "../../../services/actions/modal-actions";
import { useDispatch } from "react-redux";
import { burgerConstructorСheckout } from "../../../services/actions/order-details-actions";

const ConstructorTotal = (props) => {
  const { orderPrice = 0, orderIngredients } = props;
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(burgerConstructorСheckout(orderIngredients));
    dispatch(openModal("order"));
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
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

ConstructorTotal.propTypes = {
  orderPrice: PropTypes.number.isRequired,
  orderIngredients: PropTypes.array.isRequired,
};

export default ConstructorTotal;
