import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import styles from "./forgot-password.module.sass";
import { useDispatch } from "react-redux";
import { passwordReset } from "../../utils/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && email.length > 0) {
      setButtonDisabled(false);
    }
  }, [email]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (email !== "" && email.length > 0) {
        passwordReset(email).then((response) => {
          if (response && response.success) {
            navigate("/reset-password", { replace: true });
          } else {
            setError(
              "Произошла ошибка, проверьте правильность заполения email"
            );
          }
        });
      }
    },
    [email]
  );

  return (
    <div className={styles.forgotPassword}>
      <div className="text text_type_main-medium">Восстановление пароля</div>
      <form onSubmit={onSubmit}>
        <EmailInput
          placeholder={"Укажите e-mail"}
          onChange={onChangeEmail}
          value={email}
          name={"email"}
          isIcon={false}
          extraClass="mt-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6"
          disabled={buttonDisabled}
        >
          Восстановить
        </Button>
      </form>
      {error !== null && <div className="mt-5">{error}</div>}
      <div className="mt-20 text text_type_main-default text_color_inactive">
        Вспомнили пароль? <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
