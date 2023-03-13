import React, { useEffect, useState } from "react";
import styles from "./app.module.sass";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Preloader from "../preloader/preloader";
import { getIngredients } from "../../utils/api";

function App() {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setLoader(true);
    getIngredients()
      .then((response) => {
        if (response.success) {
          setIngredients(response.data);
          setLoader(false);
        }
      })
      .catch(() => {
        setLoader(true);
        setError(true);
      });
  }, []);

  return (
    <>
      {loader && <Preloader />}
      {!loader && (
        <>
          <AppHeader />
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
