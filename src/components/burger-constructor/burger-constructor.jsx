import React, { useState } from "react";
import ConstructorElements from "./constructor-elements/constructor-elements";
import ConstructorTotal from "./constructor-total/constructor-total";
import ConstructorDetails from "./constructor-details/constructor-details";
import styles from "./burger-constructor.module.sass";
import Modal from "../modal/modal";
import * as PropTypes from "prop-types";

const BurgerConstructor = (props) => {
  const { ingredients, loader, error } = props;
  const [modal, setModal] = useState(false);

  const [orderId, setOrderId] = useState(Number("12345"));

  const orderPrice = ingredients.reduce((sum, item) => sum + item.price, 0);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <section className={`mt-25 ${styles.burgerConstructor}`}>
      {modal && (
        <Modal closeModal={closeModal} openModal={modal}>
          <ConstructorDetails orderId={orderId} />
        </Modal>
      )}
      {!loader && (
        <>
          <ConstructorElements
            ingredients={ingredients}
            loader={loader}
            error={error}
          />
          <ConstructorTotal orderPrice={orderPrice} openModal={openModal} />
        </>
      )}
    </section>
  );
};

export default BurgerConstructor;
