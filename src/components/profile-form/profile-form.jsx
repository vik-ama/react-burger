import React, { useState } from "react";
import { NameInput } from "../ui/input-name";
import { EmailInput } from "../ui/input-email";
import { PasswordInput } from "../ui/input-password";
import styles from "../../pages/profile/profile.module.sass";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../services/actions/auth-actions";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
    password: "*****",
  });

  const handleChangeValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(changeUser(values));
  };

  return (
    <div className={styles.profile__form}>
      <form onSubmit={handleSubmitForm}>
        <NameInput
          onChange={handleChangeValues}
          value={values.name}
          name={"name"}
          placeholder="Имя"
          isIcon={true}
        />
        <EmailInput
          onChange={handleChangeValues}
          value={values.email}
          name={"email"}
          placeholder="Логин"
          isIcon={true}
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={handleChangeValues}
          value={values.password}
          name={"password"}
          isIcon={true}
          placeholder="Пароль"
          extraClass="mt-6"
        />
        {(values.name !== user.name ||
          values.email !== user.email ||
          values.password !== user.password) && (
          <div className={`mt-6 ${styles.profile__buttons}`}>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              onClick={handleReset}
            >
              Отмена
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
