export async function getProductCart(user) {
  const res = await fetch("http://localhost:8000/users/" + user + "/cart", {
    credentials: "include"
  });
  const body = await res.json();
  return body;
}
