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
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass="pr-5 pl-5"
          >
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default">Констркутор</span>
          </Button>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass="pr-5 pl-5"
          >
            <ListIcon type="primary" />
            <span className="text text_type_main-default text_color_inactive">
              Лента заказов
            </span>
          </Button>
        </div>
        <div className={`${styles.appHeader__logo}`}>
          <Logo />
        </div>
        <div className={`${styles.appHeader__lk}`}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass="pr-5 pl-5"
          >
            <ProfileIcon type="primary" />
            <span className="text text_type_main-default text_color_inactive">
              Личный кабнет
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
