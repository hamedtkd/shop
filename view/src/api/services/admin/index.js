import {
    BASE_INSTANCE
} from "@/api/constant"

export const adminServices = (data) => {
    // return BASE_INSTANCE.post('/admin',data).then()
    return BASE_INSTANCE({
            method: 'post',
            url: '/admin',
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    

}