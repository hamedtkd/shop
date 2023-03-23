import { BASE_INSTANCE } from "@/api/constant"

export const signUpServices = (data) => {
    return BASE_INSTANCE.post('/signup',data)
}