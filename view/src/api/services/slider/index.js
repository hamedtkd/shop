import { BASE_INSTANCE } from "@/api/constant"

export const sliderServices = (data) => {
    return BASE_INSTANCE.get('/slider')
}
