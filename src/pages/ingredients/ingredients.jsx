import React from "react";
import IngredientsDetails from "../../components/burger-ingredients/ingredients-details/ingredients-details";
import styles from "./ingredients.module.sass";
import Preloader from "../../components/preloader/preloader";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../utils/types";

const Ingredients = (props) => {
  const { ingredients, isLoading } = props;

  return (
    <div className={styles.ingredients}>
      <>
        {isLoading && ingredients.length > 0 ? (
          <Preloader />
        ) : (
          <>
            <div
              className={`text text_type_main-large ${styles.ingredients__title}`}
            >
              Детали ингредиента
            </div>
            <IngredientsDetails
              ingredients={ingredients}
              isLoading={isLoading}
            />
          </>
        )}
      </>
    </div>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Ingredients;
