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
    <header className={`pt-4 pb-4 ${styles.appHeader}`}>
      <div className={styles.appHeader__container}>
        <nav className={styles.appHeader__nav}>
          <Button
            htmlType={"button"}
            type={"secondary"}
            size={"medium"}
            extraClass="pt-4 pb-4 pl-5 pr-5 text text_type_main-default"
            style={{ color: "#f2f2f2" }}
          >
            <BurgerIcon type="primary" /> Конструктор
          </Button>
          <Button
            htmlType={"button"}
            type={"secondary"}
            size={"medium"}
            extraClass="pt-4 pb-4 pl-5 pr-5 text text_type_main-default text_color_inactive"
          >
            <ListIcon type="secondary" /> Лента заказов
          </Button>
        </nav>
        <div className={styles.appHeader__logo}>
          <Logo />
        </div>
        <div className={styles.appHeader__lk}>
          <Button
            htmlType={"button"}
            type={"secondary"}
            size={"medium"}
            extraClass="pt-4 pb-4 pl-5 pr-5 text text_type_main-default text_color_inactive"
          >
            <ProfileIcon type="secondary" /> Личный кабинет
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
