import { Navigate, Outlet } from "react-router-dom";
import { TOKEN, getLocalStorageItem } from "../utils/localStorageManager";

const PrivateRoute = () => {
  const token = getLocalStorageItem(TOKEN);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
