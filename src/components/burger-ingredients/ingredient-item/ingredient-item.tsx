import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./ingredient-item.module.sass";

const IngredientItem = (props: any) => {
  const { _id, image, price, name } = props;

  return (
    <div id={_id} className={`${styles.ingredientItem}`}>
      <div className={`${styles.ingredientItem__image}`}>
        <img src={image} alt={name} />
      </div>
      <div className={`mt-1 mb-1 ${styles.ingredientItem__price}`}>
        <span className="text text_type_digits-default">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div
        className={`text text_type_main-default ${styles.ingredientItem__name}`}
      >
        {name}
      </div>
      <div className={`${styles.ingredientItem__counter}`}>
        <Counter count={1} size="default" extraClass="m-1" />
      </div>
    </div>
  );
};

export default IngredientItem;
