import React from "react";

import done from "../../../images/done.png";

import styles from "./constructor-details.module.sass";

interface IConstructorDetailsProps {
  orderNumber: number;
  orderName: string;
}

const ConstructorDetails = (props: IConstructorDetailsProps) => {
  const { orderNumber, orderName } = props;

  return (
    <div
      className={`mt-20 mb-20 ${styles.constructorDetails}`}
      data-test="order-details"
    >
      <div
        className={`text text_type_digits-large ${styles.constructorDetails__id}`}
      >
        {orderNumber}
      </div>
      <div
        className={`mt-8 text text_type_main-medium ${styles.constructorDetails__title}`}
      >
        идентификатор заказа
      </div>
      <div className={`mt-15 ${styles.constructorDetails__image}`}>
        <img src={done} alt="" />
      </div>
      <div
        className={`mt-15 text text_type_main-default ${styles.constructorDetails__text}`}
      >
        Ваш заказ начали готовить
      </div>
      <div
        className={`mt-2 text text_type_main-default text_color_inactive ${styles.constructorDetails__description}`}
      >
        Дождитесь готовности &quot;{orderName}&quot; на орбитальной станции
      </div>
    </div>
  );
};

export default ConstructorDetails;
