import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Authentication/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../components/Dashboard/Profile/Profile";
import ResetPassword from "../components/Authentication/ResetPassword";
import ResetPasswordConfirm from "../components/Authentication/ResetPasswordConfirm";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import PaymentSuccess from "../components/PaymentSuccess";
import AddProduct from "../pages/AddProduct";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes  */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="reset_password" element={<ResetPassword />} />
        <Route
          path="password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
        <Route path="shop/:productId" element={<ProductDetails />} />
      </Route>
      {/* Private routes  */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="product/add" element={<AddProduct />} />
      </Route>
      <Route
        path="payment/:status"
        element={
          <PrivateRoute>
            <PaymentSuccess />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
