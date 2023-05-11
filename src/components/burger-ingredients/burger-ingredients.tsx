import React, { useEffect, useMemo, useRef, useState } from "react";

import { useInView } from "react-intersection-observer";

import { IIngredient } from "../../utils/types";

import styles from "./burger-ingredients.module.sass";
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";
import IngredientsGroup from "./ingredients-group/ingredients-group";

export const BUN = "bun";
export const SAUCE = "sauce";
export const MAIN = "main";

interface IBurgerIngredientsProps {
  ingredients: IIngredient[];
  isLoading: boolean;
  hasError: boolean;
}

const BurgerIngredients = (props: IBurgerIngredientsProps) => {
  const { ingredients, isLoading, hasError } = props;
  const [current, setCurrent] = useState(BUN);

  const ingredientsSection = useRef<HTMLDivElement>(null);

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
    return ingredients.filter((item: IIngredient) => item.type === BUN);
  }, [ingredients]);

  const ingredientsSauce = useMemo(() => {
    return ingredients.filter((item: IIngredient) => item.type === SAUCE);
  }, [ingredients]);

  const ingredientsMain = useMemo(() => {
    return ingredients.filter((item: IIngredient) => item.type === MAIN);
  }, [ingredients]);

  return (
    <>
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
                title={"Булки"}
                ingredients={ingredientsBun}
              />
            </div>
            <div ref={refSauce}>
              <IngredientsGroup
                type={SAUCE}
                title={"Соусы"}
                ingredients={ingredientsSauce}
              />
            </div>
            <div ref={refMain}>
              <IngredientsGroup
                type={MAIN}
                title={"Начинки"}
                ingredients={ingredientsMain}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BurgerIngredients;
