import React, { useEffect } from "react";
import styles from "./app.module.sass";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Preloader from "../preloader/preloader";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients-actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const { ingredients, hasError, isLoading } = useSelector(
    (state) => state.burgerIngredients
  );

  useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <AppHeader />
          <main className={styles.app__main}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients
                ingredients={ingredients}
                isLoading={isLoading}
                hasError={hasError}
              />
              <BurgerConstructor isLoading={isLoading} hasError={hasError} />
            </DndProvider>
          </main>
        </>
      )}
    </>
  );
}

export default App;
