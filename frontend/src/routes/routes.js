import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Home from '../views/home';
import ProductsPage from "../views/products_page";
import ProductDetail from "../views/product_detail";
import Login from "../views/login";
import Register from "../views/register";
import Purchased from "../views/purchased";
import UserInfo from "../views/userInfo";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/products/:name",
    exact: true,
    component: ProductDetail
  },

  {
    path: "/users/login",
    exact: true,
    component: Login
  },
  {
    path: "/users/register",
    exact: true,
    component: Register
  },
  {
    path: "/products",
    exact: true,
    component: ProductsPage
  },
  {
    path: "/purchased",
    exact: true,
    component: Purchased
  },
  {
    path: "/user/information",
    exact: true,
    component: UserInfo
  }
];

export default () => (
  <Fragment>
    {routes.map((route, i) => (
      <Route key={i} {...route} />
    ))}
  </Fragment>
);
