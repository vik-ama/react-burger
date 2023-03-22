import {
  BURGER_CONSTRUCTOR_REQUEST,
  BURGER_CONSTRUCTOR_FAILED,
  BURGER_CONSTRUCTOR_ADD_BUN,
  BURGER_CONSTRUCTOR_ADD_INGREDIENT,
  BURGER_CONSTRUCTOR_REMOVE_INGREDIENT,
  BURGER_CONSTRUCTOR_CHANGE_INGREDIENT,
} from "../actions/burger-constructor-actions";

const initialState = {
  isLoading: false,
  hasError: false,
  ingredients: [],
  bun: null,
};

const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case BURGER_CONSTRUCTOR_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BURGER_CONSTRUCTOR_ADD_BUN: {
      return {
        ...state,
        isLoading: false,
        bun: action.payload,
      };
    }
    case BURGER_CONSTRUCTOR_ADD_INGREDIENT: {
      return {
        ...state,
        isLoading: false,
        ingredients: [
          ...state.ingredients,
          { ...action.payload, uuid: action.uuid },
        ],
      };
    }
    case BURGER_CONSTRUCTOR_REMOVE_INGREDIENT: {
      return {
        ...state,
        isLoading: false,
        ingredients: state.ingredients.filter(
          (item) => state.ingredients.indexOf(item) !== action.payload
        ),
      };
    }

    case BURGER_CONSTRUCTOR_CHANGE_INGREDIENT: {
      return {
        ...state,
        isLoading: false,
        ingredients: [...action.payload],
      };
    }

    case BURGER_CONSTRUCTOR_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default burgerConstructorReducer;
