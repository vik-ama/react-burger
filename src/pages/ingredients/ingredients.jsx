import React, { useEffect, useMemo } from "react";
import IngredientsDetails from "../../components/burger-ingredients/ingredients-details/ingredients-details";
import { useParams } from "react-router-dom";
import Page404 from "../page404/page404";
import styles from "./ingredients.module.sass";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients-actions";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../components/preloader/preloader";

const Ingredients = (props) => {
  const { ingredients, isLoading } = props;

  return (
    <div className={styles.ingredients}>
      <>
        {isLoading && ingredients.length > 0 ? (
          <Preloader />
        ) : (
          <>
            <div
              className={`text text_type_main-large ${styles.ingredients__title}`}
            >
              Детали ингредиента
            </div>
            <IngredientsDetails
              ingredients={ingredients}
              isLoading={isLoading}
            />
          </>
        )}
      </>
    </div>
  );
};

export default Ingredients;
