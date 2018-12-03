export async function getProducts() {
  const res = await fetch("http://localhost:8000/products", {
    credentials: "include"
  });
  const body = await res.json();
  return body.products;
}

export async function getProduct(param) {
  const res = await fetch("http://localhost:8000" + param, {
    credentials: "include"
  });
  const body = await res.json();
  return body.product;
}

export const addNewProduct = async data => {
  const res = await fetch("http://localhost:8000/products/add", {
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
  const res = await fetch("http://localhost:8000/products/" + id, {
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
  const res = await fetch("http://localhost:8000/products/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  return res.status;
};
