import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients-tabs.module.sass";
import PropTypes from "prop-types";
const IngredientsTabs = (props) => {
  const { current, setCurrent } = props;

  const scrollTo = (e) => {
    setCurrent(e);
    const el = document.querySelector("#" + e);
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

IngredientsTabs.propTypes = {
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default IngredientsTabs;
