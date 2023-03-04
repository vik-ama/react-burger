import React from "react";
import IngredientItem from "../ingredient-item/ingredient-item";
import styles from "./ingredients-group.module.sass";

const IngredientsGroup = (props: any) => {
  const { type, title, data } = props;

  //console.log(data);

  return (
    <div id={type} className={`${styles.ingredientsGroup}`}>
      <h2 className={`mb-6 text text_type_main-medium`}>{title}</h2>
      <div className={`ml-4 mr-4 ${styles.ingredientsGroup__items}`}>
        {data.map((item: any) => {
          return <IngredientItem key={item._id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default IngredientsGroup;
