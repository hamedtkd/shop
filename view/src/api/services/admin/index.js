import { BASE_INSTANCE } from "@/api/constant"

export const adminServices = (data) => {
    // return BASE_INSTANCE.post('/admin',data).then()
    return BASE_INSTANCE.post({
        // method: 'post',
        url: '/',
        data: data,
        headers: {'Content-Type': 'multipart/form-data' }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (response) {
            console.log(response);
        });

}
