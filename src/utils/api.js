import {
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
} from "../services/actions/auth-actions";

export const NORMA_API = "https://norma.nomoreparties.space/api";

export const INGREDIENTS = `${NORMA_API}/ingredients`;
export const AUTH_LOGIN = `${NORMA_API}/auth/login`;
export const AUTH_REGISTER = `${NORMA_API}/auth/register`;
export const AUTH_LOGOUT = `${NORMA_API}/auth/logout`;
export const AUTH_TOKEN = `${NORMA_API}/auth/token`;
export const AUTH_USER = `${NORMA_API}/auth/user`;

export const PASSWORD_RESET = `${NORMA_API}/password-reset`;
export const PASSWORD_RESET_RESET = `${NORMA_API}/password-reset/reset`;

export const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((error) => Promise.reject(error));
};

export const refreshToken = () => {
  return fetch(AUTH_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return await checkResponse(response);
  } catch (error) {
    if (error.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const response = await fetch(url, options);
      return await checkResponse(response);
    } else {
      return Promise.reject(error);
    }
  }
};

export const getUser = () => {
  return fetchWithRefresh(AUTH_USER, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken"),
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
};

export const getIngredients = () => {
  return fetch(INGREDIENTS)
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};

export const authRegister = (name, email, password) => {
  return fetch(AUTH_REGISTER, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ name: name, email: email, password: password }),
  })
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};

export const authLogin = (email, password) => {
  return fetch(AUTH_LOGIN, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ email: email, password: password }),
  })
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};

export const passwordReset = (email) => {
  return fetch(PASSWORD_RESET, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ email: email }),
  })
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};

export const passwordChange = (password, token) => {
  return fetch(PASSWORD_RESET_RESET, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ password: password, token: token }),
  })
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};

export const authLogout = () => {
  return fetch(AUTH_LOGOUT, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  })
    .then(checkResponse)
    .catch((error) => {
      console.log(error);
    });
};
