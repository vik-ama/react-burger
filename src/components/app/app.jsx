import React, { useEffect, useState } from "react";
import styles from "./app.module.sass";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Preloader from "../preloader/preloader";

function App() {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setLoader(true);
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((response) => response.json())
      .then((response) => {
        setIngredients(response.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(true);
        setError(true);
      });
  }, []);

  //console.log(ingredients);

  return (
    <>
      {loader && <Preloader />}
      {!loader && (
        <>
          <header className={styles.app__header}>
            <AppHeader />
          </header>
          <main className={styles.app__main}>
            <BurgerIngredients
              ingredients={ingredients}
              loader={loader}
              error={error}
            />
            <BurgerConstructor
              ingredients={ingredients}
              loader={loader}
              error={error}
            />
          </main>
        </>
      )}
    </>
  );
}

export default App;
