import { BASE_INSTANCE } from "@/api/constant"

export const searchServices = (name) => {
    return BASE_INSTANCE.post(`/search?searchName=${name}`)
}