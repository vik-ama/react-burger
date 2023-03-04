import React from "react";
import styles from "./constructor-total.module.sass";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
const ConstructorTotal = () => {
  return (
    <div className={`ml-4 mr-4 mt-10 ${styles.constructorTotal}`}>
      <div className={`${styles.constructorTotal__summ}`}>
        <span
          className={`text text_type_digits-medium ${styles.constructorTotal__summ_counter}`}
        >
          610
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.constructorTotal__button}`}>
        <Button htmlType="button" type="primary" size="large">
          Нажми на меня
        </Button>
      </div>
    </div>
  );
};

export default ConstructorTotal;
