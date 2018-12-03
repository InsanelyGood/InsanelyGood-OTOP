import { BACKEND } from "../config";

export async function getOrders() {
  const res = await fetch(BACKEND + `/orders`, {
    credentials: "include"
  });
  const body = await res.json();
  return body.orders;
}
export async function getDetailOfOrder(id) {
  const res = await fetch(BACKEND + `/orders/` + id + `/fullDetail`, {
    credentials: "include"
  });
  const body = await res.json();
  return body;
}
export const setNewStatus = async (id, data) => {
  const res = await fetch(BACKEND + "/orders/" + id, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.status;
};
export const deleteOrder = async (id, data) => {
  const res = await fetch(BACKEND + "/orders/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.status;
};
