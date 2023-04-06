import {
  AUTH_LOGIN_FAILED,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_FAILED,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_REGISTER_FAILED,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  GET_USER_CLEAR,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  PASSWORD_RESET_FAILED,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_SUCCESS,
} from "../actions/auth-actions";

const initialState = {
  user: null,
  isLoading: false,
  hasError: false,
  isAuthChecked: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthChecked: true,
      };
    }
    case AUTH_REGISTER_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }

    case AUTH_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthChecked: true,
      };
    }
    case AUTH_LOGIN_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }

    case GET_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuthChecked: true,
      };
    }

    case GET_USER_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    case GET_USER_CLEAR: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        isAuthChecked: false,
        user: null,
      };
    }

    case AUTH_LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AUTH_LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuthChecked: false,
        user: null,
      };
    }
    case AUTH_LOGOUT_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }

    // case PASSWORD_RESET_REQUEST: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }
    // case PASSWORD_RESET_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // }
    // case PASSWORD_RESET_FAILED: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     hasError: true,
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default authReducer;