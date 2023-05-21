import React from "react";

import { IPayload } from "../../utils/types";

export const WS_CONNECTION_START = "WS_CONNECTION_START";
export const WS_CONNECTION_SUCCESS = "WS_CONNECTION_SUCCESS";
export const WS_CONNECTION_ERROR = "WS_CONNECTION_ERROR";
export const WS_GET_MESSAGE = "WS_GET_MESSAGE";
export const WS_CONNECTION_CLOSED = "WS_CONNECTION_CLOSED";
export const WS_SEND_MESSAGE = "WS_SEND_MESSAGE";
export const WS_CONNECTION_END = "WS_CONNECTION_END";
export const WS_CONNECTION_ORDERS_START = "WS_CONNECTION_ORDERS_START";
export const WS_CONNECTION_ORDERS_SUCCESS = "WS_CONNECTION_ORDERS_SUCCESS";
export const WS_CONNECTION_ORDERS_ERROR = "WS_CONNECTION_ORDERS_ERROR";
export const WS_GET_ORDERS_MESSAGE = "WS_GET_ORDERS_MESSAGE";
export const WS_CONNECTION_ORDERS_CLOSED = "WS_CONNECTION_ORDERS_CLOSED";
export const WS_SEND_ORDERS_MESSAGE = "WS_SEND_ORDERS_MESSAGE";
export const WS_CONNECTION_ORDERS_END = "WS_CONNECTION_ORDERS_END";

export interface IWSConnectionStart {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWsGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  payload: IPayload;
}

export interface IWsConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsSendMessage {
  readonly type: typeof WS_SEND_MESSAGE;
}

export interface IWsConnectionEnd {
  readonly type: typeof WS_CONNECTION_END;
}

export interface IWsConnectionOrdersStart {
  readonly type: typeof WS_CONNECTION_ORDERS_START;
}

export interface IWsConnectionOrdersSuccess {
  readonly type: typeof WS_CONNECTION_ORDERS_SUCCESS;
}

export interface IWsConnectionOrdersError {
  readonly type: typeof WS_CONNECTION_ORDERS_ERROR;
}

export interface IWsGetOrdersMessage {
  readonly type: typeof WS_GET_ORDERS_MESSAGE;
  payload: IPayload;
}

export interface IWsConnectionOrdersClosed {
  readonly type: typeof WS_CONNECTION_ORDERS_CLOSED;
}

export interface IWsSendOrdersMessage {
  readonly type: typeof WS_SEND_ORDERS_MESSAGE;
}

export interface IWsConnectionOrdersEnd {
  readonly type: typeof WS_CONNECTION_ORDERS_END;
}

export type TWsConnectActions =
  | IWSConnectionStart
  | IWsConnectionSuccess
  | IWsConnectionError
  | IWsGetMessage
  | IWsConnectionClosed
  | IWsSendMessage
  | IWsConnectionEnd
  | IWsConnectionOrdersStart
  | IWsConnectionOrdersSuccess
  | IWsConnectionOrdersError
  | IWsGetOrdersMessage
  | IWsConnectionOrdersClosed
  | IWsSendOrdersMessage
  | IWsConnectionOrdersEnd;

export interface IWsActions {
  readonly wsConnectionStart: typeof WS_CONNECTION_START;
  readonly wsConnectionSuccess: typeof WS_CONNECTION_SUCCESS;
  readonly wsConnectionError: typeof WS_CONNECTION_ERROR;
  readonly wsGetMessage: typeof WS_GET_MESSAGE;
  readonly wsConnectionClosed: typeof WS_CONNECTION_CLOSED;
  readonly wsSendMessage: typeof WS_SEND_MESSAGE;
  readonly wsConnectionEnd: typeof WS_CONNECTION_END;
  readonly wsConnectionOrdersStart: typeof WS_CONNECTION_ORDERS_START;
  readonly wsConnectionOrdersSuccess: typeof WS_CONNECTION_ORDERS_SUCCESS;
  readonly wsConnectionOrdersError: typeof WS_CONNECTION_ORDERS_ERROR;
  readonly wsGetOrdersMessage: typeof WS_GET_ORDERS_MESSAGE;
  readonly wsConnectionOrdersClosed: typeof WS_CONNECTION_ORDERS_CLOSED;
  readonly wsSendOrdersMessage: typeof WS_SEND_ORDERS_MESSAGE;
  readonly wsConnectionOrdersEnd: typeof WS_CONNECTION_ORDERS_END;
}

export const socketActions: IWsActions = {
  wsConnectionStart: WS_CONNECTION_START,
  wsConnectionSuccess: WS_CONNECTION_SUCCESS,
  wsConnectionError: WS_CONNECTION_ERROR,
  wsGetMessage: WS_GET_MESSAGE,
  wsConnectionClosed: WS_CONNECTION_CLOSED,
  wsSendMessage: WS_SEND_MESSAGE,
  wsConnectionEnd: WS_CONNECTION_END,
  wsConnectionOrdersStart: WS_CONNECTION_ORDERS_START,
  wsConnectionOrdersSuccess: WS_CONNECTION_ORDERS_SUCCESS,
  wsConnectionOrdersError: WS_CONNECTION_ORDERS_ERROR,
  wsGetOrdersMessage: WS_GET_ORDERS_MESSAGE,
  wsConnectionOrdersClosed: WS_CONNECTION_ORDERS_CLOSED,
  wsSendOrdersMessage: WS_SEND_ORDERS_MESSAGE,
  wsConnectionOrdersEnd: WS_CONNECTION_ORDERS_END,
};