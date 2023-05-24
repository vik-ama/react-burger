// eslint-disable-next-line import/named
import { Middleware } from "redux";

import { IWsActions } from "../actions/socket-actions";
import { IOrderInfo } from "../../utils/types";

const socketMiddleware = (wsUrl: string, wsActions: IWsActions): Middleware => {
  return (store) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type } = action;
      const {
        wsConnectionClosed,
        wsConnectionOrdersError,
        wsConnectionError,
        wsConnectionOrdersStart,
        wsConnectionOrdersSuccess,
        wsConnectionStart,
        wsConnectionSuccess,
        wsGetOrdersMessage,
        wsGetMessage,
      } = wsActions;

      if (type === wsConnectionStart) {
        socket = new WebSocket(`${wsUrl}/all`);
      } else {
        const token = localStorage.getItem("accessToken");
        if (type === wsConnectionOrdersStart && token) {
          const accessToken = token.split("Bearer ")[1];
          socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
        }
      }

      if (socket && type === wsConnectionStart) {
        socket.onopen = (event) => {
          dispatch({
            type: wsConnectionSuccess,
            payload: event,
          });
        };
        socket.onerror = (event) => {
          dispatch({
            type: wsConnectionError,
            payload: event,
          });
        };
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          if (restParsedData.orders) {
            restParsedData.orders.sort(
              (a: IOrderInfo, b: IOrderInfo) => b.number - a.number
            );
          }
          dispatch({
            type: wsGetMessage,
            payload: restParsedData,
          });
        };
        socket.onclose = (event) => {
          dispatch({
            type: wsConnectionClosed,
            payload: event,
          });
        };
      }

      if (socket && type === wsConnectionOrdersStart) {
        socket.onopen = (event) => {
          dispatch({
            type: wsConnectionOrdersSuccess,
            payload: event,
          });
        };
        socket.onerror = (event) => {
          dispatch({
            type: wsConnectionOrdersError,
            payload: event,
          });
        };
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          if (restParsedData.orders) {
            restParsedData.orders.sort(
              (a: IOrderInfo, b: IOrderInfo) => b.number - a.number
            );
            dispatch({
              type: wsGetOrdersMessage,
              payload: restParsedData,
            });
          }
        };
        socket.onclose = (event) => {
          dispatch({
            type: wsConnectionOrdersError,
            payload: event,
          });
        };
      }

      next(action);
    };
  };
};

export default socketMiddleware;
