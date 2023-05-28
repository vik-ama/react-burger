import React, { SyntheticEvent } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { removeBurgerIngredientDetails } from "../../../services/actions/burger-ingredient-details-actions";
import { burgerConstructorClear } from "../../../services/actions/order-details-actions";

import { useAppDispatch, useAppSelector } from "../../../hook/hooks";

import styles from "./modal-overlay.module.sass";

interface IModalOverlay {
  handleCloseModal: (e: React.SyntheticEvent) => void;
}

const ModalOverlay = (props: IModalOverlay) => {
  const { handleCloseModal } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const burgerIngredientDetails = useAppSelector(
    (state) => state.burgerIngredientDetails
  );
  //const orderDetails = useAppSelector((state) => state.orderDetails);

  return (
    <div className={`${styles.modalOverlay}`} onClick={handleCloseModal}></div>
  );
};

export default ModalOverlay;
