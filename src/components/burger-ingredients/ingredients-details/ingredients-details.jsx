import React from "react";
import styles from "./ingredients-details.module.sass";
import { ingredientPropTypes } from "../../../utils/types";
import PropTypes from "prop-types";

const IngredientsDetails = (props) => {
  const {
    ingredientData = {
      name: "title",
      image_large: "url",
      calories: 0,
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
    },
  } = props;
  //console.log(props);
  return (
    <div className={`${styles.ingredientsDetails}`}>
      <div className={`ml-5 mr-5 ${styles.ingredientsDetails__image}`}>
        <img src={ingredientData.image_large} alt={ingredientData.name} />
      </div>
      <div
        className={`mt-4 text text_type_main-medium ${styles.ingredientsDetails__title}`}
      >
        {ingredientData.name}
      </div>
      <div className={`mt-8 mb-5 ${styles.ingredientsDetails__info}`}>
        <div
          className={`text text_type_main-default text_color_inactive ${styles.ingredientsDetails__info_item}`}
        >
          <span>Калории,ккал</span>
          <span>{ingredientData.calories}</span>
        </div>
        <div
          className={`text text_type_main-default text_color_inactive ${styles.ingredientsDetails__info_item}`}
        >
          <span>Белки, г</span>
          <span>{ingredientData.proteins}</span>
        </div>
        <div
          className={`text text_type_main-default text_color_inactive ${styles.ingredientsDetails__info_item}`}
        >
          <span>Жиры, г</span>
          <span>{ingredientData.fat}</span>
        </div>
        <div
          className={`text text_type_main-default text_color_inactive ${styles.ingredientsDetails__info_item}`}
        >
          <span>Углеводы, г</span>
          <span>{ingredientData.carbohydrates}</span>
        </div>
      </div>
    </div>
  );
};

IngredientsDetails.propTypes = {
  ingredientData: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};

export default IngredientsDetails;
