import React, { useMemo } from "react";
import styles from "./ingredients-item.module.sass";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropTypes } from "../../../utils/types";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { addBurgerIngredientDetails } from "../../../services/actions/burger-ingredient-details-actions";
import { openModal } from "../../../services/actions/modal-actions";

const IngredientsItem = (props) => {
  const { ingredient } = props;
  const dispatch = useDispatch();

  const handleOpenModal = (ingredient) => {
    dispatch(addBurgerIngredientDetails(ingredient));
    dispatch(openModal("details"));
  };

  // считалка ингредиентов
  const burgerConstructor = useSelector((state) => state.burgerConstructor);

  const countBun = useMemo(() => {
    if (burgerConstructor.bun !== null) {
      return burgerConstructor.bun._id === ingredient._id ? 2 : 0;
    }
  }, [burgerConstructor, ingredient._id]);

  const countIngredients = useMemo(() => {
    if (burgerConstructor.ingredients.length !== 0) {
      const burgerConstructorIngredientsFilter =
        burgerConstructor.ingredients.filter(
          (item) => item._id === ingredient._id
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
    <div
      className={`${styles.ingredientsItem} ${
        isDrag ? styles.ingredientsItem__drag : ""
      }`}
      onClick={() => handleOpenModal(ingredient)}
      ref={dragRef}
    >
      <div className={`ml-4 mr-4 ${styles.ingredientsItem__image}`}>
        <img src={ingredient.image} alt={ingredient.name} />
      </div>
      <div className={`mt-1 mb-1 ${styles.ingredientsItem__price}`}>
        <span className={`text text_type_digits-default`}>
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.ingredientsItem__name}`}>{ingredient.name}</div>

      {count > 0 && (
        <div className={`${styles.ingredientsItem__count}`}>
          <Counter count={count} size="default" extraClass="m-1" />
        </div>
      )}
    </div>
  );
};

IngredientsItem.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};

export default IngredientsItem;
