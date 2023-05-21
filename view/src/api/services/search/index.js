import { BASE_INSTANCE } from "@/api/constant"

export const searchServices = (data) => {
    console.log(data);
    return BASE_INSTANCE.post(`/search?searchName=${data.searchName}&filter=${data?.filter}&sort=${data.sort}&price=${data.price}`)
}