import React, { useState } from "react";
import styles from "./burger-ingredients.module.sass";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";
import IngredientsGroup from "./ingredients-group/ingredients-group";

const BurgerIngredientsTabs = () => {
  const [current, setCurrent] = useState("bun");

  const scrollTo = (e: any) => {
    const element: any = document.querySelector("#" + e);
    setCurrent(e);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <div className={`${styles.burgerIngredients__tabs}`}>
      <Tab value="bun" active={current === "bun"} onClick={scrollTo}>
        Булки
      </Tab>
      <Tab value="sauce" active={current === "sauce"} onClick={scrollTo}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={scrollTo}>
        Начинки
      </Tab>
    </div>
  );
};

const BurgerIngredients = () => {
  return (
    <section className={`mt-10 ${styles.burgerIngredients}`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={`mt-5`}>{BurgerIngredientsTabs()}</div>
      <div
        className={`mt-10 custom-scroll ${styles.burgerIngredients__menuCategories}`}
      >
        <IngredientsGroup
          type={`bun`}
          title={`Булки`}
          data={data.filter((item: any) => item.type === "bun")}
        />
        <IngredientsGroup
          type={`sauce`}
          title={`Соусы`}
          data={data.filter((item: any) => item.type === "sauce")}
        />
        <IngredientsGroup
          type={`main`}
          title={`Начинки`}
          data={data.filter((item: any) => item.type === "main")}
        />
      </div>
    </section>
  );
};

export default BurgerIngredients;
