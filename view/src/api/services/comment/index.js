import { BASE_INSTANCE } from "@/api/constant"

export const commentServices = (data) => {
    return BASE_INSTANCE.post('/comment',data)
}
export const fetchCommentServices = (data) => {
    return BASE_INSTANCE.post('/comments',{data})
}