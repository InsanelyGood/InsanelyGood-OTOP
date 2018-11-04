export async function getOrders() {
    const res = await fetch('http://localhost:8000/products', {
        credentials: 'include'
    })
    const body = await res.json()
    return body
}

