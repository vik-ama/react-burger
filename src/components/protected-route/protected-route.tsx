import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import Preloader from "../preloader/preloader";
import { useAppSelector } from "../../hook/hooks";

interface IProtectedProps {
  onlyUnAuth?: boolean;
  component: JSX.Element;
}

const Protected = ({ onlyUnAuth = false, component }: IProtectedProps) => {
  const isAuthChecked = useAppSelector((store) => store.auth.isAuthChecked);
  const { user } = useAppSelector((store) => store.auth);
  const location = useLocation();

  if (!isAuthChecked) {
    // запрос еще выполянется
    // выводим прелоадер
    return <Preloader />;
  }

  if (onlyUnAuth && user) {
    // пользователь авторизован, но роут предназначен для неавторизованных пользователей
    // делам редирект на главную страницу или на тот адрес, что записан в location.store
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !onlyUnAuth && user - Пользователь авторизован и роут для атворизиванного пользователя
  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: IProtectedProps) => (
  <Protected onlyUnAuth={true} component={component} />
);
