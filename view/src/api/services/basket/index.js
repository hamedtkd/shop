import { BASE_INSTANCE } from "@/api/constant"

export const basketServices = (data) => {
    return BASE_INSTANCE.post('/basket',{data})
}
export const fetchBasketServices = () => {
    return BASE_INSTANCE.get('/basket')
}
export const updateBasketServices = (data) => {
    return BASE_INSTANCE.post('/basket/remove',{data})
}
