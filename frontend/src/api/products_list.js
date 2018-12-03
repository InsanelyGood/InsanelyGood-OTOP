import {BACKEND} from '../config'

console.log('api: ', BACKEND);

export async function getProducts() {
  const res = await fetch(BACKEND + "/products", {
    credentials: "include"
  });
  const body = await res.json();
  return body.products;
}

export async function getProduct(param) {
  const res = await fetch(BACKEND + param, {
    credentials: "include"
  });
  const body = await res.json();
  return body.product;
}

export const addNewProduct = async data => {
  const res = await fetch(BACKEND + "/products/add", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.status;
};

export const updateProduct = async (id, data) => {
  const res = await fetch(BACKEND + "/products/" + id, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.status;
};

export const deleteProduct = async id => {
  const res = await fetch(BACKEND + "/products/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  return res.status;
};
