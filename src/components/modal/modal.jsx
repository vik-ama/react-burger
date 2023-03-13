import React, { useEffect } from "react";
import ModalOverlay from "./modal-overlay/modal-overlay";
import styles from "./modal.module.sass";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const rootModal = document.querySelector("#root-modal");

const Modal = (props) => {
  const { title, closeModal, children } = props;

  const handleCloseModal = () => {
    closeModal(false);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        closeModal(false);
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeModal]);

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
      <ModalOverlay closeModal={closeModal} />
    </>,
    rootModal
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
