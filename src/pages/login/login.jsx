import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.sass";
import {
  sendLoginForm,
  sendRegisterForm,
} from "../../services/actions/auth-actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setButtonDisabled(false);
    }
  }, [email, password]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (
        email !== "" &&
        email.length > 0 &&
        password !== "" &&
        password.length > 0
      ) {
        dispatch(sendLoginForm(email, password));
        navigate("/", { replace: true });
      }
    },
    [dispatch, navigate, email, password]
  );

  return (
    <div className={styles.login}>
      <div className="text text_type_main-medium">Вход</div>
      <form onSubmit={onSubmit}>
        <EmailInput
          onChange={onChangeEmail}
          value={email}
          name={"email"}
          isIcon={false}
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={"password"}
          extraClass="mt-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6"
          disabled={buttonDisabled}
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
