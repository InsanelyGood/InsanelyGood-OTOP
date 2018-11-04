import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "../views/home";
import ProductsPage from "../views/products_page";
import ProductDetail from "../views/product_detail";
import Login from "../views/login";
import Register from "../views/register";
import Cart from "../views/cart";

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
    path: "/cart",
    exact: true,
    component: Cart,
    canAccess: Cookies.get("username")
  }
];

export default () => (
  <Fragment>
    {routes.map(
      (route, i) => route.canAccess && <Route key={i} {...route} />
    )}
  </Fragment>
);
