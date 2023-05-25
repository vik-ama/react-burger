import { checkResponse, NORMA_API } from "../../utils/api";
import { AppDispatch } from "../../index";
import { IOrderDetailsReducerOrder } from "../reducers/order-details-reducer";

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";

export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";

export const ORDER_DETAILS_FAILED = "ORDER_DETAILS_FAILED";
export const ORDER_DETAILS_CLEAR = "ORDER_DETAILS_CLEAR";

export type TOrderDetailsReducer =
  | {
      type: typeof ORDER_DETAILS_REQUEST;
    }
  | {
      type: typeof ORDER_DETAILS_SUCCESS;
      payload: IOrderDetailsReducerOrder;
    }
  | {
      type: typeof ORDER_DETAILS_CLEAR;
    }
  | {
      type: typeof ORDER_DETAILS_FAILED;
    };

export const burgerConstructorСheckout = (order: string[]) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    const token = localStorage.getItem("accessToken");
    const accessToken = token?.split("Bearer ")[1];

    fetch(`${NORMA_API}/orders?token=${accessToken}`, {
      method: "POST",
      body: JSON.stringify({ ingredients: order }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then(checkResponse)
      .then((response) => {
        dispatch({
          type: ORDER_DETAILS_SUCCESS,
          payload: response,
        });
      })
      .catch(() => {
        dispatch({
          type: ORDER_DETAILS_FAILED,
        });
      });
  };
};

export const burgerConstructorClear = () => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: ORDER_DETAILS_CLEAR,
    });
  };
};
