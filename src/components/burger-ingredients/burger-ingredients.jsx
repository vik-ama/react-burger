import React, { useEffect, useRef, useState } from "react";
import styles from "./burger-ingredients.module.sass";
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";
import IngredientsGroup from "./ingredients-group/ingredients-group";
import Modal from "../modal/modal";
import IngredientsDetails from "./ingredients-details/ingredients-details";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../utils/types";

const BurgerIngredients = (props) => {
  const { ingredients, isLoading, hasError } = props;

  const [current, setCurrent] = useState("bun");

  // const refBun = useRef("bun");
  // const refSauce = useRef("sauce");
  // const refMain = useRef("main");

  const burgerIngredientDetails = useSelector(
    (state) => state.burgerIngredientDetails
  );
  const modal = useSelector((state) => state.modal);

  const ingredientsSection = useRef();

  const [refBun, inViewBun] = useInView({
    threshold: 0,
    root: ingredientsSection.current,
  });

  const [refSauce, inViewSauce] = useInView({
    threshold: 0.25,
    rootMargin: "-150px",
    root: ingredientsSection.current,
  });

  const [refMain, inViewMain] = useInView({
    threshold: 0.5,
    root: ingredientsSection.current,
  });

  useEffect(() => {
    if (inViewBun) {
      setCurrent("bun");
    }
    if (inViewSauce) {
      setCurrent("sauce");
    }
    if (inViewMain) {
      setCurrent("main");
    }
  }, [inViewBun, inViewSauce, inViewMain]);

  return (
    <>
      {modal.showDetails && (
        <Modal title="Детали ингредиента">
          <IngredientsDetails
            ingredientData={burgerIngredientDetails.ingredient}
          />
        </Modal>
      )}

      {!isLoading && !hasError && ingredients.length > 0 && (
        <section className={`mt-10 ${styles.burgerIngredients}`}>
          <div
            className={`text text_type_main-large ${styles.burgerIngredients__title}`}
          >
            Соберите бургер
          </div>
          <IngredientsTabs current={current} setCurrent={setCurrent} />
          <div
            ref={ingredientsSection}
            className={`mt-10 custom-scroll  ${styles.burgerIngredients__groups}`}
          >
            <div ref={refBun}>
              <IngredientsGroup
                type={`bun`}
                title={`Булки`}
                ingredients={ingredients.filter((item) => item.type === "bun")}
              />
            </div>
            <div ref={refSauce}>
              <IngredientsGroup
                type={`sauce`}
                title={`Соусы`}
                ingredients={ingredients.filter(
                  (item) => item.type === "sauce"
                )}
              />
            </div>
            <div ref={refMain}>
              <IngredientsGroup
                type={`main`}
                title={`Начинки`}
                ingredients={ingredients.filter((item) => item.type === "main")}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes.isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default BurgerIngredients;
