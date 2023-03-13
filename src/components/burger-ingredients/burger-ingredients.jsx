import React, { useEffect, useState } from "react";
import styles from "./burger-ingredients.module.sass";
import IngredientsTabs from "./ingredients-tabs/ingredients-tabs";
import IngredientsGroup from "./ingredients-group/ingredients-group";
//import { ingredients } from "../../utils/data";
import Preloader from "../preloader/preloader";
import Modal from "../modal/modal";
import IngredientsDetails from "./ingredients-details/ingredients-details";

const BurgerIngredients = (props) => {
  const { ingredients, loader, error } = props;
  const [modal, setModal] = useState(false);
  const [ingredientModal, setIngredientModal] = useState([]);

  //console.log(ingredientModal);

  const getIngredientInfo = (id) => {
    return setIngredientModal(ingredients.find((item) => item._id === id));
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && (
        <Modal
          closeModal={closeModal}
          openModal={modal}
          title="Детали ингредиента"
        >
          <IngredientsDetails
            ingredientData={ingredientModal}
            closeModal={closeModal}
          />
        </Modal>
      )}

      {!loader && ingredients.length > 0 && (
        <section className={`mt-10 ${styles.burgerIngredients}`}>
          <div
            className={`text text_type_main-large ${styles.burgerIngredients__title}`}
          >
            Соберите бургер
          </div>

          <IngredientsTabs />
          <div
            className={`mt-10 custom-scroll ${styles.burgerIngredients__groups}`}
          >
            <IngredientsGroup
              type={`bun`}
              title={`Булки`}
              ingredients={ingredients.filter((item) => item.type === "bun")}
              openModal={openModal}
              getIngredientInfo={getIngredientInfo}
            />
            <IngredientsGroup
              type={`sauce`}
              title={`Соусы`}
              ingredients={ingredients.filter((item) => item.type === "sauce")}
              openModal={openModal}
              getIngredientInfo={getIngredientInfo}
            />
            <IngredientsGroup
              type={`main`}
              title={`Начинки`}
              ingredients={ingredients.filter((item) => item.type === "main")}
              openModal={openModal}
              getIngredientInfo={getIngredientInfo}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default BurgerIngredients;
