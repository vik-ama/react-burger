import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../../utils/data";
import styles from "./constructor-elements.module.sass";

const ConstructorElements = () => {
  return (
    <div className={`ml-4 mr-4 ${styles.constructorElements}`}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={data[0].image}
      />
      <div className={`custom-scroll ${styles.constructorElements__items}`}>
        {data.map((item: any) => {
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
        price={200}
        thumbnail={data[0].image}
      />
    </div>
  );
};

export default ConstructorElements;
