import { BASE_INSTANCE } from "@/api/constant"

export const loginServices = (data) => {
    return BASE_INSTANCE.post('/login',data)
}