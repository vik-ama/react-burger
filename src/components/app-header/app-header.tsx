import React from "react";

import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";

import styles from "./app-header.module.sass";

const AppHeader = () => {
  return (
    <header className={styles.app__header}>
      <div className={`${styles.appHeader}`}>
        <div className={`pt-4 pb-4 ${styles.appHeader__container}`}>
          <div className={`${styles.appHeader__navs}`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.aButtonEnable : styles.aButtonDisable
              }
            >
              <BurgerIcon type="primary" />
              <span className="text text_type_main-default">Констркутор</span>
            </NavLink>
            <NavLink
              to="/feed"
              className={({ isActive }) =>
                isActive ? styles.aButtonEnable : styles.aButtonDisable
              }
            >
              <ListIcon type="primary" />
              <span className="text text_type_main-default">Лента заказов</span>
            </NavLink>
          </div>
          <div className={`${styles.appHeader__logo}`}>
            <Logo />
          </div>
          <div className={`${styles.appHeader__lk}`}>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? styles.aButtonEnable : styles.aButtonDisable
              }
            >
              <ProfileIcon type="primary" />
              <span className="text text_type_main-default">
                Личный кабинет
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
