import React, { SyntheticEvent } from "react";

import { useNavigate } from "react-router-dom";

import { removeBurgerIngredientDetails } from "../../../services/actions/burger-ingredient-details-actions";
import { burgerConstructorClear } from "../../../services/actions/order-details-actions";

import { useAppDispatch, useAppSelector } from "../../../hook/hooks";

import styles from "./modal-overlay.module.sass";

const ModalOverlay = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const burgerIngredientDetails = useAppSelector(
    (state) => state.burgerIngredientDetails
  );
  const orderDetails = useAppSelector((state) => state.orderDetails);

  const handleClickOverlay = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      if (burgerIngredientDetails.ingredient !== null) {
        dispatch(removeBurgerIngredientDetails());
      }
      if (orderDetails.order !== null) {
        dispatch(burgerConstructorClear());
      }
      navigate("/", { replace: true });
    }
  };

  return (
    <div
      className={`${styles.modalOverlay}`}
      onClick={handleClickOverlay}
    ></div>
  );
};

export default ModalOverlay;
