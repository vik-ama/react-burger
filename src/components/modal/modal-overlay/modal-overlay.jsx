import React from "react";
import styles from "./modal-overlay.module.sass";
import { closeModal } from "../../../services/actions/modal-actions";
import { useDispatch } from "react-redux";
import { removeBurgerIngredientDetails } from "../../../services/actions/burger-ingredient-details-actions";

const ModalOverlay = () => {
  const dispatch = useDispatch();

  //console.log(props);
  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      //(false);
      dispatch(closeModal());
      dispatch(removeBurgerIngredientDetails());
    }
  };

  return (
    <div
      className={`${styles.modalOverlay}`}
      onClick={handleClickOverlay}
    ></div>
  );
};

ModalOverlay.propTypes = {
  //closeModal: PropTypes.func.isRequired,
};
export default ModalOverlay;
