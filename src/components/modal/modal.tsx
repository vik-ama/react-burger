import React, { ReactNode, useEffect } from "react";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";

import { useLocation, useNavigate } from "react-router-dom";

import { burgerConstructorClear } from "../../services/actions/order-details-actions";

import { useAppDispatch, useAppSelector } from "../../hook/hooks";

import styles from "./modal.module.sass";
import ModalOverlay from "./modal-overlay/modal-overlay";

const rootModal = document.querySelector("#root-modal") as HTMLDivElement;

interface IModalProps {
  title?: string;
  children?: ReactNode;
  onClose: () => void;
}

const Modal = (props: IModalProps) => {
  const { title, children, onClose } = props;

  //const orderDetails = useAppSelector((state) => state.orderDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOverlayClick = (e: React.SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch, navigate]);

  return createPortal(
    <>
      <div className={styles.modal} data-test="modal">
        <div className={styles.modal__container}>
          <div className={styles.modal__block}>
            <button
              className={styles.modal__close}
              onClick={onClose}
              data-test="button-close"
            >
              <CloseIcon type="primary" />
            </button>
            {title && (
              <div className={"mt-3 text text_type_main-large"}>{title}</div>
            )}
            <div>{children}</div>
          </div>
        </div>
      </div>
      <ModalOverlay handleCloseModal={handleOverlayClick} />
    </>,
    rootModal
  );
};

export default Modal;
