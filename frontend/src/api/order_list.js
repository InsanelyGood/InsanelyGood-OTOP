import { BACKEND } from "../config";

export async function getOrders(username) {
  const res = await fetch(BACKEND + `/users/${username}/checkout`, {
    credentials: "include"
  });
  const body = await res.json();
  console.log(body);
  return body;
}

// export async function setOrder(username, body){
//     const rawResponse = await fetch(`http://localhost:8000/orders/${username}/create`, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(body),
//     });
//     const content = await rawResponse.json();
//   }
