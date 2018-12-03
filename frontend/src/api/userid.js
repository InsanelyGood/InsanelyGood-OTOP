import { BACKEND } from "../config";

export const getUserLogin = async body => {
  const res = await fetch(BACKEND + `/users/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  console.log(res);
  if (!res.ok) {
    console.log(await res.text());
  }
  return res;
};

export const getUserRegis = async body => {
  const res = await fetch(BACKEND + `/users/register/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  console.log(res);
  if (!res.ok) {
    console.log(await res.text());
  }
  return res;
};
