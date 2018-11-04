export async function getUsername(username) {
    const res = await fetch(`http://localhost:8000/users/${username}/information/`, {
        credentials: 'include'
    })
    const body = await res.json()
    console.log(body);
    
    return body

    
}

export async function setUsername(username, body){
    console.log(`http://localhost:8000/users/${username}/information/save`);
    console.log('Body: ',JSON.stringify(body));
    
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