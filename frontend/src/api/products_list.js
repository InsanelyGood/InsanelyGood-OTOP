export async function getProducts() {
    const res = await fetch('http://localhost:8000/products')
    const body = await res.json()
    return body.products
}

export async function getProduct(param) {
    const res = await fetch('http://localhost:8000' + param)
    const body = await res.json()
    return body.product
}