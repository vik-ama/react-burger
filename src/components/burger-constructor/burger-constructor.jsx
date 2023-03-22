import React, { useMemo } from "react";
import ConstructorElements from "./constructor-elements/constructor-elements";
import ConstructorTotal from "./constructor-total/constructor-total";
import ConstructorDetails from "./constructor-details/constructor-details";
import styles from "./burger-constructor.module.sass";
import Modal from "../modal/modal";
import * as PropTypes from "prop-types";
import { useSelector } from "react-redux";

const BurgerConstructor = (props) => {
  const { isLoading, hasError } = props;

  const modal = useSelector((state) => state.modal);
  const burgerConstructor = useSelector((state) => state.burgerConstructor);
  const orderDetails = useSelector((state) => state.orderDetails);

  const orderPrice = useMemo(() => {
    let price = 0;

    if (burgerConstructor.bun) {
      price += burgerConstructor.bun.price * 2;
    }
    if (burgerConstructor.ingredients.length !== 0) {
      price += burgerConstructor.ingredients.reduce(
        (sum, item) => sum + item.price,
        0
      );
    }
    return price;
  }, [burgerConstructor]);

  const orderIngredients = useMemo(() => {
    let orderIngredientsArray = [];

    if (burgerConstructor.bun) {
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    if (burgerConstructor.ingredients.length !== 0) {
      burgerConstructor.ingredients.forEach((item) => {
        orderIngredientsArray.push(item._id);
      });
    }
    return orderIngredientsArray;
  }, [burgerConstructor]);

  return (
    <section className={`mt-25 ${styles.burgerConstructor}`}>
      {modal.showOrder && orderDetails.order.success && (
        <Modal>
          <ConstructorDetails
            orderNumber={orderDetails.order.order.number}
            orderName={orderDetails.order.name}
          />
        </Modal>
      )}
      {!isLoading && (
        <>
          <ConstructorElements isLoading={isLoading} hasError={hasError} />
          <ConstructorTotal
            orderPrice={orderPrice}
            orderIngredients={orderIngredients}
          />
        </>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default BurgerConstructor;
