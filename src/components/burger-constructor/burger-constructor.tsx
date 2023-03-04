import React from "react";
import styles from "./burger-constructor.module.sass";
import ConstructorOrder from "./constructor-order/constructor-order";
import ConstructorElements from "./constructor-elements/constructor-elements";

const BurgerConstructor = () => {
  //console.log(data);

  return (
    <div className={`${styles.burgerConstructor}`}>
      <ConstructorElements />
      <ConstructorOrder />
    </div>
  );
};

export default BurgerConstructor;
