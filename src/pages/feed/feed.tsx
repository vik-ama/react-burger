import React from "react";

import OrderInfo from "../../components/order-info/order-info";

import styles from "./feed.module.sass";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={`text text_type_main-large ${styles.feed__title}`}>
        Лента заказов
      </div>
      <div className={styles.feed__block}>
        <div className={`custom-scroll ${styles.feed__list}`}>
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
          <OrderInfo />
        </div>
        <div className={styles.feed__summary}>
          <div className={styles.feed__summary_status}>
            <div className={styles.feed__summary_ready}>
              <div className="text text_type_main-medium mb-6">Готовы:</div>
              <div
                className={`text text_type_digits-default mb-2 ${styles.feed__summary_ready_success}`}
              >
                034533
              </div>
              <div
                className={`text text_type_digits-default mb-2 ${styles.feed__summary_ready_success}`}
              >
                034532
              </div>
              <div
                className={`text text_type_digits-default mb-2 ${styles.feed__summary_ready_success}`}
              >
                034530
              </div>
              <div
                className={`text text_type_digits-default mb-2 ${styles.feed__summary_ready_success}`}
              >
                034527
              </div>
              <div
                className={`text text_type_digits-default mb-2 ${styles.feed__summary_ready_success}`}
              >
                034525
              </div>
            </div>
            <div className={styles.feed__summary_inwork}>
              <div className="text text_type_main-medium mb-6">В работе:</div>
              <div className="text text_type_digits-default mb-2">034538</div>
              <div className="text text_type_digits-default mb-2">034541</div>
              <div className="text text_type_digits-default mb-2">034542</div>
            </div>
          </div>
          <div className={`mt-15 ${styles.feed__summary_completedallthetime}`}>
            <div className="text text_type_main-medium">
              Выполнено за все время:
            </div>
            <div className="text text_type_digits-large">28752</div>
          </div>
          <div className={`mt-15 ${styles.feed__summary_completedtoday}`}>
            <div className="text text_type_main-medium">
              Выполнено за сегодня:
            </div>
            <div className="text text_type_digits-large">138</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
