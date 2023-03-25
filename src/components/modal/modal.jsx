import React, { useEffect } from "react";
import ModalOverlay from "./modal-overlay/modal-overlay";
import styles from "./modal.module.sass";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeBurgerIngredientDetails } from "../../services/actions/burger-ingredient-details-actions";
import { burgerConstructorClear } from "../../services/actions/order-details-actions";

const rootModal = document.querySelector("#root-modal");

const Modal = (props) => {
  const { title, children } = props;
  const burgerIngredientDetails = useSelector(
    (state) => state.burgerIngredientDetails
  );
  const orderDetails = useSelector((state) => state.orderDetails);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    if (burgerIngredientDetails.ingredient !== null) {
      dispatch(removeBurgerIngredientDetails());
    }
    if (orderDetails.order !== null) {
      dispatch(burgerConstructorClear());
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        if (burgerIngredientDetails.ingredient !== null) {
          dispatch(removeBurgerIngredientDetails());
        }
        if (orderDetails.order !== null) {
          dispatch(burgerConstructorClear());
        }
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch, burgerIngredientDetails.ingredient, orderDetails.order]);

  return createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.modal__container}>
          <div className={styles.modal__block}>
            <button className={styles.modal__close} onClick={handleCloseModal}>
              <CloseIcon type="primary" />
            </button>
            {title && (
              <div className={`mt-3 text text_type_main-large`}>{title}</div>
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
      <ModalOverlay />
    </>,
    rootModal
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Modal;
