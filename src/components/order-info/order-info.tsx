import React from "react";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation } from "react-router-dom";

import styles from "./order-info.module.sass";

const OrderInfo = () => {
  const location = useLocation();

  return (
    <div className={`p-6 ${styles.orderInfo}`}>
      <div className={`${styles.orderInfo__top}`}>
        <div
          className={`text text_type_digits-default ${styles.orderInfo__top_number}`}
        >
          #034535
        </div>
        <div
          className={`text text_type_main-default text_color_inactive ${styles.orderInfo__top_date}`}
        >
          Сегодня, 16:20
        </div>
      </div>
      <div className={"pt-6 text text_type_main-medium"}>
        Death Star Starship Main бургер
      </div>
      {/* класс если завершен заказ ${styles.orderInfo__status_complete}*/}
      {location.pathname !== "/feed" && (
        <div
          className={`pt-2 text text_type_main-small ${styles.orderInfo__status_complete}`}
        >
          Создан
        </div>
      )}

      <div className={`pt-6 ${styles.orderInfo__bottom}`}>
        <div className={`${styles.orderInfo__bottom_items}`}>
          <div className={styles.orderInfo__bottom_item}>
            <span>
              <img
                src="https://code.s3.yandex.net/react/code/sauce-01.png"
                alt=""
              />
            </span>
          </div>
          <div className={styles.orderInfo__bottom_item}>
            <span>
              <img
                src="https://code.s3.yandex.net/react/code/sauce-02.png"
                alt=""
              />
            </span>
          </div>
          <div className={styles.orderInfo__bottom_item}>
            <span>
              <img
                src="https://code.s3.yandex.net/react/code/sauce-03.png"
                alt=""
              />
            </span>
          </div>
          <div className={styles.orderInfo__bottom_item}>
            <span>
              <img
                src="https://code.s3.yandex.net/react/code/sauce-04.png"
                alt=""
              />
            </span>
          </div>
          <div className={styles.orderInfo__bottom_item}>
            <span>
              <img
                src="https://code.s3.yandex.net/react/code/bun-01.png"
                alt=""
              />
            </span>
          </div>
          <div className={styles.orderInfo__bottom_item}>
            <span>
              <img
                src="https://code.s3.yandex.net/react/code/bun-02.png"
                alt=""
              />
            </span>
            <span
              className={`text text_type_digits-default ${styles.orderInfo__more}`}
            >
              +9
            </span>
          </div>
        </div>
        <div className={`${styles.orderInfo__bottom_summ}`}>
          <div className="text text_type_digits-default">9999</div>
          <div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
