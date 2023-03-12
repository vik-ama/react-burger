import React from "react";
import styles from "./ingredients-group.module.sass";
import IngredientsItem from "../ingredients-item/ingredients-item";
import PropTypes from "prop-types";

const IngredientsGroup = (props) => {
  const { type, title, ingredients, openModal, getIngredientInfo } = props;
  //console.log(props);

  return (
    <div id={type} className={`${styles.ingredientsGroup}`}>
      <div
        className={`text text_type_main-medium ${styles.ingredientsGroup__title}`}
      >
        {title}
      </div>
      <div className={`ml-4 mr-4 mt-6 ${styles.ingredientsGroup__items}`}>
        {ingredients.map((item) => {
          return (
            <IngredientsItem
              key={item._id}
              ingredients={item}
              openModal={openModal}
              getIngredientInfo={getIngredientInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

IngredientsGroup.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  //ingredients: ingredientPropTypes.isRequired,
  ingredients: PropTypes.array.isRequired,
};

export default IngredientsGroup;
