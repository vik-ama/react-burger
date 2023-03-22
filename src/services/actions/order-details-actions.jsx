import { checkResponse, NORMA_API } from "../../utils/api";

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";

export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";

export const ORDER_DETAILS_FAILED = "ORDER_DETAILS_FAILED";

export const burgerConstructorСheckout = (order) => {
  return (dispatch) => {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    });

    fetch(`${NORMA_API}/orders`, {
      method: "POST",
      body: JSON.stringify({ ingredients: order }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkResponse)
      .then((response) => {
        console.log(response);
        return response;
      })
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
