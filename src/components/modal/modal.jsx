import React, { useEffect } from "react";
import ModalOverlay from "./modal-overlay/modal-overlay";
import styles from "./modal.module.sass";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../services/actions/modal-actions";
import { removeBurgerIngredientDetails } from "../../services/actions/burger-ingredient-details-actions";

const rootModal = document.querySelector("#root-modal");

const Modal = (props) => {
  const { title, children } = props;
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(removeBurgerIngredientDetails());
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        dispatch(closeModal());
        dispatch(removeBurgerIngredientDetails());
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal, dispatch]);

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
