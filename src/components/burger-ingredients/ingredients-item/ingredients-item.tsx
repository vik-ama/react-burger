import React, { useMemo } from "react";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";

import { Link, useLocation } from "react-router-dom";

import { addBurgerIngredientDetails } from "../../../services/actions/burger-ingredient-details-actions";

import { IIngredient } from "../../../utils/types";

import { useAppDispatch, useAppSelector } from "../../../hook/hooks";

import styles from "./ingredients-item.module.sass";

interface IIngredientsItemProps {
  ingredient: IIngredient;
}

const IngredientsItem = (props: IIngredientsItemProps): JSX.Element => {
  const { ingredient } = props;
  const dispatch = useAppDispatch();

  const location = useLocation();

  const handleOpenModal = (ingredient: IIngredient): void => {
    dispatch(addBurgerIngredientDetails(ingredient));
  };

  // считалка ингредиентов
  const burgerConstructor = useAppSelector((state) => state.burgerConstructor);

  const countBun = useMemo(() => {
    if (burgerConstructor.bun !== null) {
      return burgerConstructor.bun._id === ingredient._id ? 2 : 0;
    }
  }, [burgerConstructor, ingredient._id]);

  const countIngredients = useMemo(() => {
    if (burgerConstructor.ingredients.length !== 0) {
      const burgerConstructorIngredientsFilter =
        burgerConstructor.ingredients.filter(
          (item: IIngredient) => item._id === ingredient._id
        );
      return burgerConstructorIngredientsFilter.length;
    }
  }, [burgerConstructor, ingredient._id]);

  const count = ingredient.type === "bun" ? countBun : countIngredients;

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredient",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <Link
      to={`/ingredients/${ingredient._id}`}
      className={`${styles.ingredientsItem} ${
        isDrag ? styles.ingredientsItem__drag : ""
      }`}
      onClick={() => handleOpenModal(ingredient)}
      ref={dragRef}
      state={{ backgroundLocation: location }}
    >
      <div className={`ml-4 mr-4 ${styles.ingredientsItem__image}`}>
        <img src={ingredient.image} alt={ingredient.name} />
      </div>
      <div className={`mt-1 mb-1 ${styles.ingredientsItem__price}`}>
        <span className={"text text_type_digits-default"}>
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.ingredientsItem__name}`}>{ingredient.name}</div>

      {count !== undefined && (
        <div className={`${styles.ingredientsItem__count}`}>
          <Counter count={count} size="default" extraClass="m-1" />
        </div>
      )}
    </Link>
  );
};

export default IngredientsItem;
