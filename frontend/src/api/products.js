import axios from "./axios"

//const API = 'http://localhost:4000/api/products'

export const getProductsReq = () => axios.get("/products")
export const getProductReq = (id) => axios.get(`/products/${id}`)

export const createProductsReq = (product) => axios.post("/products", product)
export const updateProductReq = (product) => axios.put(`/products/${product._id}`, product)

export const deleteProductReq = (id) => axios.delete(`/products/${id}`)
