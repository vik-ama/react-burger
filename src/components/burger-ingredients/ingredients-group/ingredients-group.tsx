import React from "react";

import IngredientsItem from "../ingredients-item/ingredients-item";

import { IIngredient } from "../../../utils/types";

import styles from "./ingredients-group.module.sass";

interface IIngredientsGroupProps {
  type?: "bun" | "sauce" | "main";
  title: string;
  ingredients: IIngredient[];
}

const IngredientsGroup = (props: IIngredientsGroupProps) => {
  const { type, title, ingredients } = props;

  return (
    <div id={type} className={` ${styles.ingredientsGroup}`}>
      <div
        className={`text text_type_main-medium ${styles.ingredientsGroup__title}`}
      >
        {title}
      </div>
      <div
        className={`ml-4 mr-4 mt-6 ${styles.ingredientsGroup__items}`}
        data-test={type}
      >
        {ingredients.map((item: IIngredient) => {
          return <IngredientsItem key={item._id} ingredient={item} />;
        })}
      </div>
    </div>
  );
};

export default IngredientsGroup;
