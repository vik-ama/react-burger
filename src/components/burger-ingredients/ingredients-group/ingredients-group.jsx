import React from "react";
import styles from "./ingredients-group.module.sass";
import IngredientsItem from "../ingredients-item/ingredients-item";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../../utils/types";

const IngredientsGroup = (props) => {
  const { type, title, ingredients } = props;
  //console.log(props);

  return (
    <div id={type} className={` ${styles.ingredientsGroup}`}>
      <div
        className={`text text_type_main-medium ${styles.ingredientsGroup__title}`}
      >
        {title}
      </div>
      <div className={`ml-4 mr-4 mt-6 ${styles.ingredientsGroup__items}`}>
        {ingredients.map((item) => {
          return <IngredientsItem key={item._id} ingredient={item} />;
        })}
      </div>
    </div>
  );
};

IngredientsGroup.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};

export default IngredientsGroup;
