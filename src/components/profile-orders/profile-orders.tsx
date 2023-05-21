import React, { useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import { useLocation } from "react-router-dom";

import OrderInfo from "../order-info/order-info";

import { useAppDispatch, useAppSelector } from "../../hook/hooks";
import {
  WS_CONNECTION_END,
  WS_CONNECTION_ORDERS_END,
  WS_CONNECTION_ORDERS_START,
  WS_CONNECTION_START,
} from "../../services/actions/socket-actions";

import styles from "./profile-orders.module.sass";

const ProfileOrders = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { orders } = useAppSelector((state) => state.socket);

  // надо так
  // useEffect(() => {
  //   if (location.pathname === "/profile/orders") {
  //     dispatch({ type: WS_CONNECTION_ORDERS_START });
  //   }
  //   return () => {
  //     dispatch({ type: WS_CONNECTION_ORDERS_END });
  //   };
  // }, [dispatch, location.pathname]);
  // это для теста
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
    return () => {
      dispatch({ type: WS_CONNECTION_END });
    };
  }, [dispatch]);

  return (
    <div className={`custom-scroll ${styles.profileOrders}`}>
      {orders.map((order) => {
        return (
          <OrderInfo order={order} key={uuidv4()} path={"/profile/orders"} />
        );
      })}
    </div>
  );
};

export default ProfileOrders;
