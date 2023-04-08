import React, { useCallback } from "react";
import styles from "./profile.module.sass";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/actions/auth-actions";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(logoutUser());
      navigate("/login", { replace: true });
    },
    [dispatch, navigate]
  );

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
              to="/profile/orders/:id"
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
