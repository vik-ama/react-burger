import React, { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients-tabs.module.sass";
const IngredientsTabs = () => {
  const [current, setCurrent] = useState("bun");

  const scrollTo = (e: any) => {
    setCurrent(e);
    const el: any = document.querySelector("#" + e);
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
