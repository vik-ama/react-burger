import {
  BURGER_INGREDIENTS_REQUEST,
  BURGER_INGREDIENTS_SUCCESS,
  BURGER_INGREDIENTS_FAILED,
  TBurgerIngredientsActions,
} from "../actions/burger-ingredients-actions";
import { IIngredient } from "../../utils/types";

interface IInitialState {
  isLoading: boolean;
  hasError: boolean;
  ingredients: IIngredient[] | [];
}

const initialState: IInitialState = {
  isLoading: false,
  hasError: false,
  ingredients: [],
};

const burgerIngredientsReducer = (
  state = initialState,
  action: TBurgerIngredientsActions
): IInitialState => {
  switch (action.type) {
    case BURGER_INGREDIENTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BURGER_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        ingredients: action.payload,
      };
    }
    case BURGER_INGREDIENTS_FAILED: {
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

export default burgerIngredientsReducer;
