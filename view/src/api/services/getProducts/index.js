import { BASE_INSTANCE } from "@/api/constant"

export const getProductsServices = (data) => {
    return BASE_INSTANCE.post('/products',{...data})
}
export const getSingleProductServices = (id) => {
    return BASE_INSTANCE.get(`/products?productId=${id}`)
}


