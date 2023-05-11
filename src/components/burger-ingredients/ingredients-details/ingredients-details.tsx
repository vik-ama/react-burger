import React, { useMemo } from "react";

import { useParams } from "react-router-dom";

import { IIngredient } from "../../../utils/types";

import styles from "./ingredients-details.module.sass";

interface IIngredientsDetailsProps {
  ingredients: IIngredient[];
  isLoading: boolean;
}

const IngredientsDetails = (props: IIngredientsDetailsProps) => {
  const { ingredients, isLoading } = props;

  const { id } = useParams();

  const ingredientData = useMemo(() => {
    return ingredients.find((ingredient: IIngredient) => ingredient._id === id);
  }, [ingredients, id]);

  if (!ingredients) {
    return null;
  }

  return (
    <>
      {!isLoading && ingredientData && (
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
      )}
    </>
  );
};

export default IngredientsDetails;
