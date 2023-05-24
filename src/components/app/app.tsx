import React, { useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import AppHeader from "../app-header/app-header";
import Preloader from "../preloader/preloader";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients-actions";
import Main from "../../pages/main/main";

import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import Ingredients from "../../pages/ingredients/ingredients";
import Page404 from "../../pages/page404/page404";
import Feed from "../../pages/feed/feed";
import ProfileForm from "../profile-form/profile-form";
import ProfileOrders from "../profile-orders/profile-orders";
import IngredientsDetails from "../burger-ingredients/ingredients-details/ingredients-details";
import Modal from "../modal/modal";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import { checkUserAuth } from "../../services/actions/auth-actions";
import OrderPage from "../order-page/order-page";
import { IIngredient } from "../../utils/types";
import { TRootState } from "../../services/reducers";
import { useAppDispatch, useAppSelector } from "../../hook/hooks";

interface IburgerIngredients {
  ingredients: IIngredient[];
  hasError: boolean;
  isLoading: boolean;
}

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBurgerIngredients());
    dispatch(checkUserAuth());
  }, [dispatch]);
  const { ingredients, hasError, isLoading } = useAppSelector(
    (state) => state.burgerIngredients
  );
  const location = useLocation();
  const state = location.state?.backgroundLocation;

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <AppHeader />

          <Routes location={state || location}>
            <Route
              path="/"
              element={
                <Main
                  ingredients={ingredients}
                  isLoading={isLoading}
                  hasError={hasError}
                />
              }
            />
            <Route
              path="/login"
              element={<OnlyUnAuth component={<Login />} />}
            />
            <Route
              path="/register"
              element={<OnlyUnAuth component={<Register />} />}
            />
            <Route
              path="/forgot-password"
              element={<OnlyUnAuth component={<ForgotPassword />} />}
            />

            <Route
              path="/reset-password"
              element={<OnlyUnAuth component={<ResetPassword />} />}
            />

            <Route
              path="/profile"
              element={<OnlyAuth component={<Profile />} />}
            >
              <Route index element={<ProfileForm />} />
              <Route path="/profile/orders/" element={<ProfileOrders />} />
              <Route path="/profile/orders/:id" element={<OrderPage />} />
            </Route>
            <Route path="/feed" element={<Feed />} />
            <Route path="/feed/:id" element={<OrderPage />} />
            <Route
              path="/ingredients/:id"
              element={
                <Ingredients ingredients={ingredients} isLoading={isLoading} />
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>

          {state && (
            <Routes>
              <Route
                path="/ingredients/:id"
                element={
                  <Modal title="Детали ингредиента">
                    <IngredientsDetails
                      ingredients={ingredients}
                      isLoading={isLoading}
                    />
                  </Modal>
                }
              />
            </Routes>
          )}
          {state && (
            <Routes>
              <Route
                path="/feed/:id"
                element={
                  <Modal title="Детали заказа">
                    <OrderPage />
                  </Modal>
                }
              />
            </Routes>
          )}
          {state && (
            <Routes>
              <Route
                path="/profile/orders/:id"
                element={
                  <Modal title="Детали заказа">
                    <OrderPage />
                  </Modal>
                }
              />
            </Routes>
          )}
        </>
      )}
    </>
  );
}

export default App;
