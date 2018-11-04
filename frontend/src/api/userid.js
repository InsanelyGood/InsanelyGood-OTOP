export async function setUserLogin(user) {
    const rawResponse = await fetch('http://localhost:8000/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    const content = await rawResponse.json();
  
    console.log(content);
}

export async function setUserRegis(user) {
    const rawResponse = await fetch('http://localhost:8000/users/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });
    const content = await rawResponse.json();
  
    console.log(content);
}
  