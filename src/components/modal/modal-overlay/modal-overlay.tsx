import React, { SyntheticEvent } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { removeBurgerIngredientDetails } from "../../../services/actions/burger-ingredient-details-actions";
import { burgerConstructorClear } from "../../../services/actions/order-details-actions";

import { useAppDispatch, useAppSelector } from "../../../hook/hooks";

import styles from "./modal-overlay.module.sass";

const ModalOverlay = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const burgerIngredientDetails = useAppSelector(
    (state) => state.burgerIngredientDetails
  );
  //const orderDetails = useAppSelector((state) => state.orderDetails);

  const handleClickOverlay = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      navigate(`${location.state.backgroundLocation.pathname}`, {
        replace: true,
      });
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
