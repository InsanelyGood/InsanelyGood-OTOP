import { BACKEND } from '../config'

export async function getProductCart(user) {
  const res = await fetch(BACKEND + "/users/" + user + "/cart", {
    credentials: "include"
  });
  const body = await res.json();
  return body;
}

export const addCartItem = async data => {
  const res = await fetch(BACKEND + "/users/cart/add", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.status;
};

export const removeCartItem = async data => {
  const res = await fetch(BACKEND + "/users/cart/remove", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.status;
};
