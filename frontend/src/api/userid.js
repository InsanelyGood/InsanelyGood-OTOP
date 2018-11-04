export async function setUserLogin(body) {
    
    const rawResponse = await fetch('http://localhost:8000/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    
    const content = await rawResponse.json();
  
    console.log('Content: ',content);
}

export async function setUserRegis(body) {
    const rawResponse = await fetch('http://localhost:8000/users/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const content = await rawResponse.json();
  
    console.log(content);
}