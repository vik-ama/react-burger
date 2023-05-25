import React, { FormEvent } from "react";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";

import { sendLoginForm } from "../../services/actions/auth-actions";
import useForm from "../../hook/useForm";

import { useAppDispatch } from "../../hook/hooks";

import styles from "./login.module.sass";

const Login = () => {
  const { values, handleChange } = useForm({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      values.email !== "" &&
      values.email.length > 0 &&
      values.password !== "" &&
      values.password.length > 0
    ) {
      //@ts-ignore
      dispatch(sendLoginForm(values, { onSuccess: () => navigate("/") }));
    }
  };

  return (
    <div className={styles.login}>
      <div className="text text_type_main-medium">Вход</div>
      <form onSubmit={onSubmit}>
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={"email"}
          isIcon={false}
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={"password"}
          extraClass="mt-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6"
          disabled={
            !(
              values.email !== "" &&
              values.email.length > 0 &&
              values.password !== "" &&
              values.password.length > 0
            )
          }
        >
          Войти
        </Button>
      </form>

      <div className="mt-20 text text_type_main-default text_color_inactive">
        Вы — новый пользователь? <Link to="/register">Зарегистрироваться</Link>
      </div>
      <div className="mt-4 text text_type_main-default text_color_inactive">
        Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link>
      </div>
    </div>
  );
};

export default Login;
