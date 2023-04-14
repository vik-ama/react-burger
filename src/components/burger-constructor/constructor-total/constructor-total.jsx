import React from "react";
import styles from "./constructor-total.module.sass";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { burgerConstructorСheckout } from "../../../services/actions/order-details-actions";
import { ingredientPropTypes } from "../../../utils/types";
import { useNavigate } from "react-router-dom";

const ConstructorTotal = (props) => {
  const { orderPrice = 0, orderIngredients } = props;
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
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
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

ConstructorTotal.propTypes = {
  orderPrice: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired),
};

export default ConstructorTotal;
