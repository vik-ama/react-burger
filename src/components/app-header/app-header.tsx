import React from "react";
import styles from "./app-header.module.sass";
import {
  BurgerIcon,
  Button,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
const AppHeader = () => {
  return (
    <div className={`${styles.appHeader}`}>
      <div className={`pt-4 pb-4 ${styles.appHeader__container}`}>
        <div className={`${styles.appHeader__navs}`}>
          <a href="#" className={`${styles.aButton}`}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default">Констркутор</span>
          </a>
          <a href="#" className={`${styles.aButton}`}>
            <ListIcon type="primary" />
            <span className="text text_type_main-default text_color_inactive">
              Лента заказов
            </span>
          </a>
        </div>
        <div className={`${styles.appHeader__logo}`}>
          <Logo />
        </div>
        <div className={`${styles.appHeader__lk}`}>
          <a href="#" className={`${styles.aButton}`}>
            <ProfileIcon type="primary" />
            <span className="text text_type_main-default text_color_inactive">
              Личный кабнет
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
