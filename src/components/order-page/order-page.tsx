import React from "react";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./order-page.module.sass";

const OrderPage = () => {
  return (
    <div className={styles.orderPage}>
      <div className={styles.orderPage__container}>
        <div
          className={`text text_type_digits-default ${styles.orderPage__number}`}
        >
          #034533
        </div>
        <div
          className={`text text_type_main-medium mt-10 ${styles.orderPage__title}`}
        >
          Black Hole Singularity острый бургер
        </div>
        <div
          className={`text text_type_main-default mt-3 ${styles.orderPage__status_active}`}
        >
          Выполнен
        </div>
        <div
          className={`text text_type_main-medium mt-15 ${styles.orderPage__compound}`}
        >
          Состав:
        </div>
        <div className={`mt-6 custom-scroll ${styles.orderPage__list}`}>
          <div className={`${styles.orderPage__item}`}>
            <div className={`${styles.orderPage__item_image}`}>
              <span>
                <img
                  src="https://code.s3.yandex.net/react/code/sauce-01.png"
                  alt=""
                />
              </span>
            </div>
            <div className={`${styles.orderPage__item_title}`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className={`${styles.orderPage__item_count}`}>
              <span className="text text_type_digits-default">2 x 20</span>
              <span>
                <CurrencyIcon type="primary" />
              </span>
            </div>
          </div>
          <div className={`${styles.orderPage__item}`}>
            <div className={`${styles.orderPage__item_image}`}>
              <span>
                <img
                  src="https://code.s3.yandex.net/react/code/sauce-01.png"
                  alt=""
                />
              </span>
            </div>
            <div className={`${styles.orderPage__item_title}`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className={`${styles.orderPage__item_count}`}>
              <span className="text text_type_digits-default">2 x 20</span>
              <span>
                <CurrencyIcon type="primary" />
              </span>
            </div>
          </div>
          <div className={`${styles.orderPage__item}`}>
            <div className={`${styles.orderPage__item_image}`}>
              <span>
                <img
                  src="https://code.s3.yandex.net/react/code/sauce-01.png"
                  alt=""
                />
              </span>
            </div>
            <div className={`${styles.orderPage__item_title}`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className={`${styles.orderPage__item_count}`}>
              <span className="text text_type_digits-default">2 x 20</span>
              <span>
                <CurrencyIcon type="primary" />
              </span>
            </div>
          </div>
          <div className={`${styles.orderPage__item}`}>
            <div className={`${styles.orderPage__item_image}`}>
              <span>
                <img
                  src="https://code.s3.yandex.net/react/code/sauce-01.png"
                  alt=""
                />
              </span>
            </div>
            <div className={`${styles.orderPage__item_title}`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className={`${styles.orderPage__item_count}`}>
              <span className="text text_type_digits-default">2 x 20</span>
              <span>
                <CurrencyIcon type="primary" />
              </span>
            </div>
          </div>
          <div className={`${styles.orderPage__item}`}>
            <div className={`${styles.orderPage__item_image}`}>
              <span>
                <img
                  src="https://code.s3.yandex.net/react/code/sauce-01.png"
                  alt=""
                />
              </span>
            </div>
            <div className={`${styles.orderPage__item_title}`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className={`${styles.orderPage__item_count}`}>
              <span className="text text_type_digits-default">2 x 20</span>
              <span>
                <CurrencyIcon type="primary" />
              </span>
            </div>
          </div>
          <div className={`${styles.orderPage__item}`}>
            <div className={`${styles.orderPage__item_image}`}>
              <span>
                <img
                  src="https://code.s3.yandex.net/react/code/sauce-01.png"
                  alt=""
                />
              </span>
            </div>
            <div className={`${styles.orderPage__item_title}`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className={`${styles.orderPage__item_count}`}>
              <span className="text text_type_digits-default">2 x 20</span>
              <span>
                <CurrencyIcon type="primary" />
              </span>
            </div>
          </div>
        </div>
        <div className={`mt-10 ${styles.orderPage__summ}`}>
          <div
            className={`text text_type_main-default text_color_inactive ${styles.orderPage__summ_datetime}`}
          >
            Вчера, 13:50
          </div>
          <div className={`${styles.orderPage__summ_count}`}>
            <span className="text text_type_digits-default">510</span>
            <span>
              <CurrencyIcon type="primary" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
