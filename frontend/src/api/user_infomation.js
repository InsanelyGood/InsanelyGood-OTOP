export const getUsername = async (username) => {
  const res = await fetch(`http://localhost:8000/users/${username}/information/`, {
    credentials: 'include'
  })
  const body = await res.json()
  console.log('res', res);

  return body
}

export const setUsername = async (username, body) => {
  console.log(`http://localhost:8000/users/${username}/information/save`);
  console.log('Body: ', JSON.stringify(body));

  const rawResponse = await fetch(`http://localhost:8000/users/${username}/information/save`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });
  console.log(rawResponse);

  const content = await rawResponse.json();

  console.log('Content: ', content);
}

export const setNewPassword = async (body) => {
  console.log('Body: ', JSON.stringify(body));
  let rawResponse
  try {
    rawResponse = await fetch(`http://localhost:8000/users/password/change`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error)
  }

  const content = await rawResponse.json();
  console.log('Content: ', content.err);
  return content
}

export const getPurchaseProduct = async (username) => {
  const res = await fetch(`http://localhost:8000/users/${username}/orders/`, {
    credentials: 'include'
  })
  const body = await res.json()
  console.log('res', body);

  return body
}