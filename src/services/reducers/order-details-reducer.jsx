import {
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_FAILED,
  ORDER_DETAILS_SUCCESS,
} from "../actions/order-details-actions";

const initialState = {
  isLoading: false,
  hasError: false,
  order: [],
};

const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        order: action.payload,
      };
    }
    case ORDER_DETAILS_FAILED: {
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

export default orderDetailsReducer;
