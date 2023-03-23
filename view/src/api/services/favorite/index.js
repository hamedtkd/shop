import { BASE_INSTANCE } from "@/api/constant"

export const addToFavoriteServices = (data) => {
    return BASE_INSTANCE.post('/favorite',{data})
}
export const fetchFavoriteServices = () => {
    return BASE_INSTANCE.get('/favorite')
}
export const IsProductInFavoriteServices = (data) => {
    return BASE_INSTANCE.post('/favorite/isProduct',{data})
}
