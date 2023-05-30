import React from "react";

import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

import { useDrop } from "react-dnd";

import { v4 as uuidv4 } from "uuid";

import {
  burgerConstructorAddBun,
  burgerConstructorAddIngredient,
  burgerConstructorChangeIngredient,
} from "../../../services/actions/burger-constructor-actions";
import dragndropImage from "../../../images/dragndrop.svg";
import ConstructorItem from "../constructor-item/constructor-item";

import { IIngredient } from "../../../utils/types";

import { useAppDispatch, useAppSelector } from "../../../hook/hooks";

import { BUN } from "../../burger-ingredients/burger-ingredients";

import styles from "./constructor-elements.module.sass";

const ConstructorElements = () => {
  const dispatch = useAppDispatch();
  const burgerConstructor = useAppSelector((state) => state.burgerConstructor);

  const [{ isHover }, dropRef] = useDrop<
    IIngredient,
    void,
    { isHover: boolean | null }
  >({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      ingredient.type === BUN
        ? dispatch(burgerConstructorAddBun(ingredient))
        : dispatch(burgerConstructorAddIngredient(ingredient, uuidv4()));
    },
  });

  const moveIngredient = (dragIndex: number, hoverIndex: number) => {
    dispatch(burgerConstructorChangeIngredient(dragIndex, hoverIndex));
  };

  return (
    <div
      ref={dropRef}
      className={`ml-4 mr-4 ${styles.constructorElements} ${
        isHover ? styles.constructorElements__hover : ""
      }`}
    >
      <div className={`${styles.constructorElements__bun}`}>
        {burgerConstructor.bun !== null ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${burgerConstructor.bun.name} (верх)`}
            price={burgerConstructor.bun.price}
            thumbnail={burgerConstructor.bun.image}
          />
        ) : (
          <div
            className={`${styles.constructorElements__defaultBun} ${styles.constructorElements__defaultBun_top}`}
          >
            <div className={styles.constructorElements__default_title}>
              Перетащите сюда булку
            </div>
          </div>
        )}
      </div>
      <div className={`custom-scroll ${styles.constructorElements__items}`}>
        {burgerConstructor.ingredients.length > 0 ? (
          burgerConstructor.ingredients.map((item, index) => {
            return (
              <ConstructorItem
                key={item.uuid}
                item={item}
                index={index}
                id={item.uuid}
                moveIngredient={moveIngredient}
              />
            );
          })
        ) : (
          <div className={styles.constructorElements__default}>
            <div className={styles.constructorElements__default_icon}>
              <img src={dragndropImage} alt="icon" />
            </div>
            <div className={styles.constructorElements__default_title}>
              Перетащите сюда ингредиенты
            </div>
          </div>
        )}
      </div>
      <div
        className={`${styles.constructorElements__bun} ${styles.constructorElements__bun_bottom}`}
      >
        {burgerConstructor.bun !== null ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${burgerConstructor.bun.name} (низ)`}
            price={burgerConstructor.bun.price}
            thumbnail={burgerConstructor.bun.image}
          />
        ) : (
          <div
            className={`${styles.constructorElements__defaultBun} ${styles.constructorElements__defaultBun_bottom}`}
          >
            <div className={styles.constructorElements__default_title}>
              Перетащите сюда булку
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConstructorElements;
