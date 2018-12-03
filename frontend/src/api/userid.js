export const getUserLogin = async () => {
   const res = await fetch(`http://localhost:8000/users/login/`, {
        method: 'POST',
        credentials: 'include',
    })
    console.log(res)
    if(!res.ok){
         console.log(await res.text())
    }

    // if (!res.ok) {
    //     console.log('err', res)
    //     const body = await res.json()
    //     console.log('resssss', body);
    //     return
    // }

    // // console.log('success', res)
    // const body = await res.json()
    // console.log('resssss', res);
    // // return body
    // return ''
}

export const setUserLogin = async (body) => {
    console.log('Body: ', JSON.stringify(body));
    let rawResponse
    try {
        rawResponse = await fetch(`http://localhost:8000/users/login/`, {
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

export const setUserRegis = async (body) => {
    console.log('Body: ', JSON.stringify(body));
    let rawResponse
    try {
        rawResponse = await fetch(`http://localhost:8000/users/register/`, {
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