import React from "react";

import OrderInfo from "../order-info/order-info";

import styles from "./profile-orders.module.sass";

const ProfileOrders = () => {
  return (
    <div className={`custom-scroll ${styles.profileOrders}`}>
      <OrderInfo />
      <OrderInfo />
      <OrderInfo />
      <OrderInfo />
      <OrderInfo />
    </div>
  );
};

export default ProfileOrders;
