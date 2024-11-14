import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserIsLoggedIn } from "../redux/auth/selectors";

export default function PrivateRoute({
  component: Component,
  redirectTo = "/",
}) {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
