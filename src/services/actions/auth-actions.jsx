import {
  authLogin,
  authLogout,
  authRegister,
  refreshToken,
  setUser,
} from "../../utils/api";

export const AUTH_REGISTER_REQUEST = "AUTH_REGISTER_REQUEST";
export const AUTH_REGISTER_SUCCESS = "AUTH_REGISTER_SUCCESS";
export const AUTH_REGISTER_FAILED = "AUTH_REGISTER_FAILED";

export const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_LOGIN_FAILED = "AUTH_LOGIN_FAILED";

export const PASSWORD_RESET_REQUEST = "PASSWORD_RESET_REQUEST";
export const PASSWORD_RESET_SUCCESS = "PASSWORD_RESET_SUCCESS";
export const PASSWORD_RESET_FAILED = "PASSWORD_RESET_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const GET_USER_CLEAR = "GET_USER_CLEAR";
export const GET_USER_AUTH_CHECKED = "GET_USER_AUTH_CHECKED";

export const AUTH_LOGOUT_REQUEST = "AUTH_LOGOUT_REQUEST";
export const AUTH_LOGOUT_SUCCESS = "AUTH_LOGOUT_SUCCESS";
export const AUTH_LOGOUT_FAILED = "AUTH_LOGOUT_FAILED";

export const sendRegisterForm = (name, email, password) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_REGISTER_REQUEST,
    });
    authRegister(name, email, password)
      .then((response) => {
        if (response && response.success) {
          dispatch({
            type: AUTH_REGISTER_SUCCESS,
            payload: response.user,
          });
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("refreshToken", response.refreshToken);
        }
      })
      .catch(() => {
        dispatch({
          type: AUTH_REGISTER_FAILED,
        });
      });
  };
};

export const sendLoginForm = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGIN_REQUEST,
    });
    authLogin(email, password)
      .then((response) => {
        if (response && response.success) {
          dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: response.user,
          });
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("refreshToken", response.refreshToken);
        }
      })
      .catch(() => {
        dispatch({
          type: AUTH_LOGIN_FAILED,
        });
      });
  };
};

// получаем данные пользователя
export const getUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_REQUEST,
    });
    setUser()
      .then((response) => {
        if (response && response.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: response.user,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: GET_USER_FAILED,
        });
      });
  };
};

// проверяем авторизованли пользователь
export const checkUserAuth = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_REQUEST,
    });
    if (localStorage.getItem("accessToken")) {
      console.log("мы здесь");
      // getUser().catch(() => {
      //   localStorage.removeItem("accessToken");
      //   localStorage.removeItem("refreshToken");
      //   dispatch({
      //     type: GET_USER_CLEAR,
      //   }).finally(() => {
      //     dispatch({
      //       type: GET_USER_AUTH_CHECKED,
      //     });
      //   });
      // });
    } else {
      dispatch({
        type: GET_USER_AUTH_CHECKED,
      });
    }
    // setUser()
    //   .then((response) => {
    //     if (response && response.success) {
    //       dispatch({
    //         type: GET_USER_SUCCESS,
    //         payload: response.user,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (localStorage.getItem("refreshToken")) {
    //       // чтото не работает тут
    //       //dispatch(refreshToken());
    //     }
    //     dispatch({
    //       type: GET_USER_FAILED,
    //     });
    //   })
    //   .finally(() => {
    //     dispatch({
    //       type: GET_USER_AUTH_CHECKED,
    //     });
    //   });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGOUT_REQUEST,
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    authLogout()
      .then((response) => {
        dispatch({ type: AUTH_LOGOUT_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: AUTH_LOGOUT_FAILED });
      });
  };
};
