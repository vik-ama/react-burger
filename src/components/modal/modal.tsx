import React, { ReactNode, useEffect } from "react";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { createPortal } from "react-dom";

import { useNavigate } from "react-router-dom";

import { burgerConstructorClear } from "../../services/actions/order-details-actions";

import { useAppDispatch, useAppSelector } from "../../hook/hooks";

import styles from "./modal.module.sass";
import ModalOverlay from "./modal-overlay/modal-overlay";

const rootModal = document.querySelector("#root-modal") as HTMLDivElement;

interface IModalProps {
  title?: string;
  children?: ReactNode;
}

const Modal = (props: IModalProps) => {
  const { title, children } = props;

  const orderDetails = useAppSelector((state) => state.orderDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    if (orderDetails.order !== null) {
      dispatch(burgerConstructorClear());
    }
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        if (orderDetails.order !== null) {
          dispatch(burgerConstructorClear());
        }
        navigate("/", { replace: true });
      }
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch, orderDetails.order, navigate]);

  return createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.modal__container}>
          <div className={styles.modal__block}>
            <button className={styles.modal__close} onClick={handleCloseModal}>
              <CloseIcon type="primary" />
            </button>
            {title && (
              <div className={"mt-3 text text_type_main-large"}>{title}</div>
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

export default Modal;
