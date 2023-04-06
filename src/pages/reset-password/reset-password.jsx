import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import styles from "./reset-password.module.sass";
import { passwordChange, passwordReset } from "../../utils/api";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    if (
      password !== "" &&
      password.length > 0 &&
      code !== "" &&
      code.length > 0
    ) {
      setButtonDisabled(false);
    }
  }, [password, code]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (
        password !== "" &&
        password.length > 0 &&
        code !== "" &&
        code.length > 0
      ) {
        passwordChange(password, code).then((response) => {
          if (response && response.success) {
            setMessage("Пароль успешно изменен!");
            navigate("/login", { replace: true });
          } else {
            setMessage("Произошла какая-то неведомая ошибка)");
          }
        });
      }
    },
    [password, code]
  );

  return (
    <div className={styles.resetPassword}>
      <div className="text text_type_main-medium">Восстановление пароля</div>
      <form onSubmit={onSubmit}>
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={"password"}
          extraClass="mt-6"
          placeholder={"Введите новый пароль"}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChangeCode}
          value={code}
          name={"name"}
          error={false}
          extraClass="mt-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6"
          disabled={buttonDisabled}
        >
          Сохранить
        </Button>
      </form>
      {message !== null && <div className="mt-5">{message}</div>}
      <div className="mt-20 text text_type_main-default text_color_inactive">
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};

export default ResetPassword;
