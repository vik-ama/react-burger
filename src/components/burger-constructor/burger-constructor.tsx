import React, { useMemo } from "react";

import Modal from "../modal/modal";

import { IIngredient } from "../../utils/types";

import { useAppSelector } from "../../hook/hooks";

import ConstructorElements from "./constructor-elements/constructor-elements";
import ConstructorTotal from "./constructor-total/constructor-total";
import ConstructorDetails from "./constructor-details/constructor-details";
import styles from "./burger-constructor.module.sass";

interface IBurgerConstructorProps {
  isLoading: boolean;
  hasError: boolean;
}

const BurgerConstructor = (props: IBurgerConstructorProps) => {
  const { isLoading, hasError } = props;

  const burgerConstructor = useAppSelector((state) => state.burgerConstructor);
  const orderDetails = useAppSelector((state) => state.orderDetails);

  const orderPrice = useMemo<number>(() => {
    let price = 0;
    if (burgerConstructor.bun) {
      price += burgerConstructor.bun.price * 2;
    }
    if (burgerConstructor.ingredients.length !== 0) {
      //@ts-ignore
      price += burgerConstructor.ingredients.reduce(
        (sum: number, item: IIngredient) => sum + item.price,
        0
      );
    }
    return price;
  }, [burgerConstructor]);

  const orderIngredients = useMemo<string[]>(() => {
    const orderIngredientsArray: string[] = [];
    if (burgerConstructor.bun) {
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    if (burgerConstructor.ingredients.length !== 0) {
      burgerConstructor.ingredients.forEach((item: IIngredient) => {
        orderIngredientsArray.push(item._id);
      });
    }
    if (burgerConstructor.bun) {
      orderIngredientsArray.push(burgerConstructor.bun._id);
    }
    return orderIngredientsArray;
  }, [burgerConstructor]);

  return (
    <section className={`mt-25 ${styles.burgerConstructor}`}>
      {/*//@ts-ignore*/}
      {orderDetails.order !== null && orderDetails.order.success && (
        <Modal>
          <ConstructorDetails
            //@ts-ignore
            orderNumber={orderDetails.order.order.number}
            //@ts-ignore
            orderName={orderDetails.order.name}
          />
        </Modal>
      )}
      {!isLoading && (
        <>
          <ConstructorElements />
          <ConstructorTotal
            orderPrice={orderPrice}
            orderIngredients={orderIngredients}
          />
        </>
      )}
    </section>
  );
};

export default BurgerConstructor;
