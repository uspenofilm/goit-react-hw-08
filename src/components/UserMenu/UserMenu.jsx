import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  return (
    <div className={css.userMenuContainer}>
      <p className={css.username}>Hello, {userData.name}!</p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </button>
    </div>
  );
}
