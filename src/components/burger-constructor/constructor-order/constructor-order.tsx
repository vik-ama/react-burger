import React from "react";
import styles from "./constructor-order.module.sass";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
const ConstructorOrder = () => {
  return (
    <div className={`mt-10 ml-4 mr-4 ${styles.constructorOrder}`}>
      <div className={`${styles.constructorOrder__summ}`}>
        <span className={`text text_type_digits-medium`}>610</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`ml-10 ${styles.constructorOrder__button}`}>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default ConstructorOrder;
