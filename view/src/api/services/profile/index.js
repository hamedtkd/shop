import { BASE_INSTANCE } from "@/api/constant"

export const profileServices = (data) => {
    return BASE_INSTANCE.post('/profile',data)
}
export const fetchProfileServices = (data) => {
    return BASE_INSTANCE.get('/profile',data)
}