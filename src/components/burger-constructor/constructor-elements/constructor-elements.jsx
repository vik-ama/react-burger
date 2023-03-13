import React from "react";
import styles from "./constructor-elements.module.sass";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../../../utils/types";
import PropTypes from "prop-types";

const ConstructorElements = (props) => {
  const { ingredients } = props;

  //console.log(props);

  const ingredientsBun = ingredients.find((item) => item.type === "bun");

  //console.log(ingredientsBun);
  //const {name, price, image} = ingredientsBun;

  return (
    <div className={`ml-4 mr-4 ${styles.constructorElements}`}>
      <div className={`${styles.constructorElements__buh}`}>
        {ingredientsBun && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredientsBun.name} (верх)`}
            price={ingredientsBun.price}
            thumbnail={ingredientsBun.image}
          />
        )}
      </div>
      <div className={`custom-scroll ${styles.constructorElements__items}`}>
        {ingredients.map((item) => {
          return (
            item.type !== "bun" && (
              <div
                key={item._id}
                className={`${styles.constructorElements__item}`}
              >
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            )
          );
        })}
      </div>
      <div className={`${styles.constructorElements__buh}`}>
        {ingredientsBun && (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredientsBun.name} (верх)`}
            price={ingredientsBun.price}
            thumbnail={ingredientsBun.image}
          />
        )}
      </div>
    </div>
  );
};

ConstructorElements.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
};

export default ConstructorElements;
