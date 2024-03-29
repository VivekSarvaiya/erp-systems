import { Navigate, Outlet } from "react-router-dom";
import { TOKEN, getLocalStorageItem } from "../utils/localStorageManager";

const PublicRoute = () => {
  const token = getLocalStorageItem(TOKEN);

  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
