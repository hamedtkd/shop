import { commentServices } from "@/api/services/comment";
import { Button } from "@/components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const Comment = () => {
    const [comment, setComment] = useState();
    const {productId} = useParams()
    const handelSubmit = () => {
        comment?commentServices({comment,productId}).then((res) => {
            toast.success(res.data.message)
        }).catch((err,res) => {

            toast.error(res?.data?.message?res.data.message:err.message)
        }):toast.error('نظر خود را در قسمت مریوط را وارد کنید')
    }
    return (
        <div className="bg-gray-50 border rounded-lg  pb-5 mt-12 ">
            <div className="px-3 py-5  ">
                <p className="text-2xl">نظرات شما</p>
            </div>
            <div className="flex  border rounded-lg mx-3">
                <textarea name="comment" id="" className="form-control w-75  h-56 w-3/4 border-gray-100 rounded-lg bg-white"
                    placeholder=" اینجا بنویسید..."
                    onChange={(e) => setComment(e.target.value)}></textarea>
                <div className="flex flex-col justify-between items-center flex-grow gap-4 py-4 bg-white rounded-lg">
                    <p>امتیاز دهید</p>
                    <div>
                    </div>
                    <Button onClick={ handelSubmit} className='w-3/4' >
                        ثبت نظر
                    </Button>
                </div>
            </div>
        </div>
    );
}
