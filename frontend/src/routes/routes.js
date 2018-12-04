import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "../views/home";
import ProductsPage from "../views/products_page";
import ProductsPageCentral from "../views/products_page_central"
import ProductsPageNorth from "../views/products_page_north"
import ProductsPageSouth from "../views/products_page_south"
import ProductsPageNorthenEast from "../views/products_page_northeneast"
import ProductDetail from "../views/product_detail";
import Login from "../views/login";
import Register from "../views/register";
import Purchased from "../views/purchased";
import UserInfo from "../views/userInfo";
import UserHistory from "../views/userHistory";
import UserInfoEdit from "../views/userEdit";
import UserPassword from "../views/userPassword";
import Cart from "../views/cart";
import Checkout from "../views/checkout";
import Admin from "../views/admin";
import AdminProduct from '../views/admin_product'

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    canAccess: true
  },
  {
    path: "/products/:id",
    exact: true,
    component: ProductDetail,
    canAccess: true
  },
  {
    path: "/users/login",
    exact: true,
    component: Login,
    canAccess: true
  },
  {
    path: "/users/register",
    exact: true,
    component: Register,
    canAccess: true
  },
  {
    path: "/products",
    exact: true,
    component: ProductsPage,
    canAccess: true
  },
  {
    path: "/central",
    exact: true,
    component: ProductsPageCentral,
    canAccess: true
  },
  {
    path: "/north",
    exact: true,
    component: ProductsPageNorth,
    canAccess: true
  },
  {
    path: "/south",
    exact: true,
    component: ProductsPageSouth,
    canAccess: true
  },
  {
    path: "/northeneast",
    exact: true,
    component: ProductsPageNorthenEast,
    canAccess: true
  },
  {
    path: "/purchased",
    exact: true,
    component: Purchased,
    canAccess: true
  },
  {
    path: "/users/information",
    exact: true,
    component: UserInfo,
    canAccess: true
  },
  {
    path: "/users/information/history",
    exact: true,
    component: UserHistory,
    canAccess: true
  },
  {
    path: "/users/information/edit",
    exact: true,
    component: UserInfoEdit,
    canAccess: true
  },
  {
    path: "/users/information/changePassword",
    exact: true,
    component: UserPassword,
    canAccess: true
  },
  {
    path: "/cart",
    exact: true,
    component: Cart,
    canAccess: Cookies.get("username")
  },
  {
    path: "/checkout",
    exact: true,
    component: Checkout,
    canAccess: true
  },
  {
    path: "/admin/orders",
    exact: true,
    component: Admin,
    canAccess: Cookies.get("role") === "admin"
  },
  {
    path: "/admin/products",
    exact: true,
    component: AdminProduct,
    canAccess: Cookies.get("role") === "admin"
  }
];

export default () => (
  <Fragment>
    {routes.map((route, i) => route.canAccess && <Route key={i} {...route} />)}
  </Fragment>
);
