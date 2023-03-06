import React from "react";
import styles from "./constructor-elements.module.sass";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredients } from "../../../utils/data";
const ConstructorElements = () => {
  return (
    <div className={`ml-4 mr-4 ${styles.constructorElements}`}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={1255}
        thumbnail={ingredients[0].image}
      />
      <div className={`custom-scroll ${styles.constructorElements__items}`}>
        {ingredients.map((item: any) => {
          return (
            item.type !== "bun" && (
              <ConstructorElement
                key={item._id}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            )
          );
        })}
      </div>

      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={1255}
        thumbnail={ingredients[0].image}
      />
    </div>
  );
};

export default ConstructorElements;
