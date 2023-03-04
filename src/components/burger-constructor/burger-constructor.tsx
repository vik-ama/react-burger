import React from "react";
import ConstructorElements from "./constructor-elements/constructor-elements";
import ConstructorTotal from "./constructor-total/constructor-total";
import styles from "./burger-constructor.module.sass";
const BurgerConstructor = () => {
  return (
    <section className={`mt-25 ${styles.burgerConstructor}`}>
      <ConstructorElements />
      <ConstructorTotal />
    </section>
  );
};

export default BurgerConstructor;
