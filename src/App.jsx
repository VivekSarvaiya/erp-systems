import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
const Login = lazy(() => import('./views/login'))
const Orders = lazy(() => import('./views/orders'))
const Products = lazy(() => import('./views/products'))
const Calender = lazy(() => import('./views/calender'))
const Loader = lazy(() => import('./components/Loader'))
const DashBoard = lazy(() => import('./views/dashboard'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />} >
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/calendar" element={<Calender />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  )
};

export default App;