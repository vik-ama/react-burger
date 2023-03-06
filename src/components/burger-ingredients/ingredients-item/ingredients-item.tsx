import React from "react";
import styles from "./ingredients-item.module.sass";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../../../utils/types";
import PropTypes from "prop-types";
const IngredientsItem = (props: any) => {
  const { data } = props;
  //console.log(data);
  return (
    <div className={`${styles.ingredientsItem}`}>
      <div className={`ml-4 mr-4 ${styles.ingredientsItem__image}`}>
        <img src={data.image} alt={data.name} />
      </div>
      <div className={`mt-1 mb-1 ${styles.ingredientsItem__price}`}>
        <span className={`text text_type_digits-default`}>{data.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.ingredientsItem__name}`}>{data.name}</div>
      <div className={`${styles.ingredientsItem__count}`}>
        <Counter count={1} size="default" extraClass="m-1" />
      </div>
    </div>
  );
};

IngredientsItem.propTypes = {
  data: ingredientPropTypes,
};

export default IngredientsItem;
