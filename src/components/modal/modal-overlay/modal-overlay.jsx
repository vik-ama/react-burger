import React from "react";
import styles from "./modal-overlay.module.sass";
import PropTypes from "prop-types";

const ModalOverlay = (props) => {
  const { closeModal } = props;

  //console.log(props);
  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(false);
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
  closeModal: PropTypes.func.isRequired,
};
export default ModalOverlay;
