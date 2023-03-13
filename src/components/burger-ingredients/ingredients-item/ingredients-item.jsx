import React from "react";
import styles from "./ingredients-item.module.sass";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../../../utils/types";
import PropTypes from "prop-types";

const IngredientsItem = (props) => {
  const { ingredients, openModal, getIngredientInfo } = props;

  //console.log(props);
  const handleOpenModal = (id) => {
    getIngredientInfo(id);
    openModal(true);
  };

  return (
    <div
      className={`${styles.ingredientsItem}`}
      onClick={() => handleOpenModal(ingredients._id)}
    >
      <div className={`ml-4 mr-4 ${styles.ingredientsItem__image}`}>
        <img src={ingredients.image} alt={ingredients.name} />
      </div>
      <div className={`mt-1 mb-1 ${styles.ingredientsItem__price}`}>
        <span className={`text text_type_digits-default`}>
          {ingredients.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.ingredientsItem__name}`}>
        {ingredients.name}
      </div>
      <div className={`${styles.ingredientsItem__count}`}>
        <Counter count={1} size="default" extraClass="m-1" />
      </div>
    </div>
  );
};

IngredientsItem.propTypes = {
  ingredients: ingredientPropTypes.isRequired,
  openModal: PropTypes.func.isRequired,
  getIngredientInfo: PropTypes.func.isRequired,
};

export default IngredientsItem;
