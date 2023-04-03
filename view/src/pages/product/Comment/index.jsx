import { commentServices } from "@/api/services/comment";
import { Button } from "@/components";
import { Rating } from "flowbite-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import uuid from 'react-uuid';

export const Comment = () => {
    const [comment, setComment] = useState();
    const { productId } = useParams()
  
    const [star, setStar] = useState(false);
    
    const items = []
    const handleRating = () => {
        for (let i = 1; i <= star; i++) {
            items.push(<span key={uuid()}  onClick={() => setStar(i)} >  <Rating.Star /></span>)
        }
        for (let i = 1; i <= 5-star; i++) {
            items.push(<span key={uuid()}  onClick={() => setStar(star+i)} >  <Rating.Star filled={false} /></span>)
        }
        return (
            <Rating className="cursor-pointer">
                {items}
            </Rating>
        ) 
    }
    const handelSubmit = () => {
        comment ? commentServices({ comment, productId,star }).then((res) => {
            toast.success(res.data.message)
        }).catch((err, res) => {
            console.log(err);

            toast.error( err?.response?.data?.message)
        }) : toast.error('نظر خود را در قسمت مریوط را وارد کنید')
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
                    {!star ? <Rating className="cursor-pointer">
                        <span onClick={() => setStar(1)} >  <Rating.Star filled={false} /></span>
                        <span onClick={() => setStar(2)} >  <Rating.Star filled={false} /></span>
                        <span onClick={() => setStar(3)} >  <Rating.Star filled={false} /></span>
                        <span onClick={() => setStar(4)} >  <Rating.Star filled={false} /></span>
                        <span onClick={() => setStar(5)} >  <Rating.Star filled={false} /></span>

                    </Rating> :

                        handleRating()



                    }


                    <div>
                    </div>
                    <Button onClick={handelSubmit} className='w-3/4' >
                        ثبت نظر
                    </Button>
                </div>
            </div>
        </div>
    );
}
