import React, { SyntheticEvent } from "react";

import { NavLink, Outlet } from "react-router-dom";

import { logoutUser } from "../../services/actions/auth-actions";

import { useAppDispatch } from "../../hook/hooks";

import styles from "./profile.module.sass";

const Profile = () => {
  const dispatch = useAppDispatch();

  const handleLogout = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div className={styles.profile}>
      <nav>
        <ul>
          <li className="text text_type_main-medium">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "text_color_primary" : "text_color_inactive"
              }
              end
            >
              Профиль
            </NavLink>
          </li>
          <li className="text text_type_main-medium">
            <NavLink
              to="/profile/orders"
              className={({ isActive }) =>
                isActive ? "text_color_primary" : "text_color_inactive"
              }
              end
            >
              История заказов
            </NavLink>
          </li>
          <li className="text text_type_main-medium">
            <button className="text_type_main-medium" onClick={handleLogout}>
              Выход
            </button>
          </li>
        </ul>
        <div
          className={`mt-20 text text_type_main-default ${styles.profile__note}`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Profile;
