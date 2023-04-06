import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Preloader from "../preloader/preloader";

const Protected = ({ onlyUnAuth = false, component }) => {
  const isAuthChecked = useSelector((store) => store.auth.isAuthChecked);
  const user = useSelector((store) => store.auth.user);
  const location = useLocation();

  if (!isAuthChecked) {
    // запрос еще выполянется
    // выводим прелоадер
    return <Preloader />;
  }

  if (onlyUnAuth && user) {
    // пользователь авторизован, но роут предназначен для неавторизованных пользователей
    // делам редирект на главную страницу или на тот адрес что записан в location.store
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
export const OnlyUnAuth = ({ component }) => (
  <Protected onlyUnAuth={true} component />
);
