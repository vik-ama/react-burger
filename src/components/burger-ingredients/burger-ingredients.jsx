import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./burger-ingredients.module.sass";
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";
import IngredientsGroup from "./ingredients-group/ingredients-group";
import Modal from "../modal/modal";
import IngredientsDetails from "./ingredients-details/ingredients-details";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { ingredientPropTypes } from "../../utils/types";

export const BUN = "bun";
export const SAUCE = "sauce";
export const MAIN = "main";

const BurgerIngredients = (props) => {
  const { ingredients, isLoading, hasError } = props;
  const [current, setCurrent] = useState(BUN);

  const burgerIngredientDetails = useSelector(
    (state) => state.burgerIngredientDetails
  );

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
      setCurrent(BUN);
    }
    if (inViewSauce) {
      setCurrent(SAUCE);
    }
    if (inViewMain) {
      setCurrent(MAIN);
    }
  }, [inViewBun, inViewSauce, inViewMain]);

  const ingredientsBun = useMemo(() => {
    return ingredients.filter((item) => item.type === BUN);
  }, [ingredients]);

  const ingredientsSauce = useMemo(() => {
    return ingredients.filter((item) => item.type === SAUCE);
  }, [ingredients]);

  const ingredientsMain = useMemo(() => {
    return ingredients.filter((item) => item.type === MAIN);
  }, [ingredients]);

  return (
    <>
      {/*{burgerIngredientDetails.ingredient !== null && (*/}
      {/*  <Modal title="Детали ингредиента">*/}
      {/*    <IngredientsDetails*/}
      {/*      ingredientData={burgerIngredientDetails.ingredient}*/}
      {/*    />*/}
      {/*  </Modal>*/}
      {/*)}*/}

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
                type={BUN}
                title={`Булки`}
                ingredients={ingredientsBun}
              />
            </div>
            <div ref={refSauce}>
              <IngredientsGroup
                type={SAUCE}
                title={`Соусы`}
                ingredients={ingredientsSauce}
              />
            </div>
            <div ref={refMain}>
              <IngredientsGroup
                type={MAIN}
                title={`Начинки`}
                ingredients={ingredientsMain}
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
