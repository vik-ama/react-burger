import React, { useState } from "react";
import { NameInput } from "../ui/input-name";
import { EmailInput } from "../ui/input-email";
import { PasswordInput } from "../ui/input-password";
import styles from "../../pages/profile/profile.module.sass";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

const ProfileForm = () => {
  const [name, setName] = useState("Марк");
  const [email, setEmail] = useState("mail@stellar.burger");
  const [password, setPassword] = useState("sdfdfgsdf");

  return (
    <div className={styles.profile__form}>
      <NameInput
        onChange={(e) => setName(e.target.value)}
        value={name}
        name={"name"}
        placeholder="Имя"
        isIcon={true}
      />
      <EmailInput
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name={"email"}
        placeholder="Логин"
        isIcon={true}
        extraClass="mt-6"
      />
      <PasswordInput
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name={"password"}
        isIcon={true}
        placeholder="Пароль"
        extraClass="mt-6"
      />
      <div className={`mt-6 ${styles.profile__buttons}`}>
        <Button htmlType="button" type="secondary" size="medium">
          Отмена
        </Button>
        <Button htmlType="button" type="primary" size="medium">
          Сохранить
        </Button>
      </div>
    </div>
  );
};

export default ProfileForm;
