import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ingredients-tabs.module.sass";

interface IIngredientsTabsProps {
  current: string;
  setCurrent: (e: string) => void;
}

const IngredientsTabs = (props: IIngredientsTabsProps) => {
  const { current, setCurrent } = props;

  const scrollTo = (e: string) => {
    setCurrent(e);
    const el = document.querySelector("#" + e) as HTMLDivElement;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`mt-5 ${styles.ingredientsTabs}`}>
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

export default IngredientsTabs;
