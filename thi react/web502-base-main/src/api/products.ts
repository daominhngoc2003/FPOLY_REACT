import { IProduct } from "../types/products"
import { instance } from "./instance"

export const getAllProduct = () => {
    return instance.get("/products")
}

export const getOneProduct = (id: number) => {
    return instance.get("/products/" + id)
}

export const DeleteProduct = (id: number) => {
    return instance.delete("/products/" + id)
}

export const AddProduct = (pro: IProduct) => {
    return instance.post("/products", pro)
}

export const UpdateProduct = (pro: IProduct) => {
    return instance.put("/products/" + pro.id, pro)
}
