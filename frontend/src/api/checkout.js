import { BACKEND } from '../config'

export const setNewOrder = async (username, data) => {
    const res = await fetch(BACKEND + '/orders/' + username + "/create/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    return res.status;
  };

  export async function getOrders(username) {
    const res = await fetch(`http://localhost:8000/users/${username}/checkout`, {
        credentials: 'include'
    })
    const body = await res.json()
    console.log(body);
    return body
}