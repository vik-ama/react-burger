import React from "react";

import IngredientsDetails from "../../components/burger-ingredients/ingredients-details/ingredients-details";

import Preloader from "../../components/preloader/preloader";

import { IIngredient } from "../../utils/types";

import styles from "./ingredients.module.sass";

interface IIngredientsProps {
  ingredients: IIngredient[];
  isLoading: boolean;
}

const Ingredients = (props: IIngredientsProps) => {
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

export default Ingredients;
