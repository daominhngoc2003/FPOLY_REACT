import instance from "./intance"

import { IProduct } from "../types/products"


const getAllProduct = ()=>{
    return instance.get("/products")
}

const createProduct = (product:IProduct)=>{
    return instance.post("/products", product)
}

const getOneProduct = (_id:number)=>{
    return instance.get("/products/"+_id)
}

const deleteProduct = (_id:number)=>{
    return instance.delete("/products/"+_id)
}

const UpdateProduct = (product:IProduct)=>{
    return instance.put("/products/"+product._id, product)
}

export {getAllProduct, getOneProduct, createProduct,UpdateProduct, deleteProduct}