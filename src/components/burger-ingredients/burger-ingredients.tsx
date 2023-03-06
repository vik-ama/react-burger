import React from "react";
import styles from "./burger-ingredients.module.sass";
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";
import IngredientsGroup from "./ingredients-group/ingredients-group";
import { ingredients } from "../../utils/data";

const BurgerIngredients = () => {
  //console.log(ingredientPropTypes);

  return (
    <section className={`mt-10 ${styles.burgerIngredients}`}>
      <div
        className={`text text_type_main-large ${styles.burgerIngredients__title}`}
      >
        Соберите бургер
      </div>
      <IngredientsTabs />
      <div
        className={`mt-10 custom-scroll ${styles.burgerIngredients__groups}`}
      >
        <IngredientsGroup
          type={`bun`}
          title={`Булки`}
          data={ingredients.filter((item: any) => item.type === "bun")}
        />
        <IngredientsGroup
          type={`sauce`}
          title={`Соусы`}
          data={ingredients.filter((item: any) => item.type === "sauce")}
        />
        <IngredientsGroup
          type={`main`}
          title={`Начинки`}
          data={ingredients.filter((item: any) => item.type === "main")}
        />
      </div>
    </section>
  );
};

export default BurgerIngredients;
