import { uploadsURL } from "@/api/constant";
import { basketServices, updateBasketServices } from "@/api/services/basket";
import { Button, persianNumber } from "@/components";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIcon2 } from "@heroicons/react/24/outline";
import { addToFavoriteServices, IsProductInFavoriteServices } from "@/api/services/favorite";



export const ProductBoxs = ({ product }) => {
    const [displayBtn, setDisplayBtn] = useState(true);
    const [favorite, setFavorite] = useState(false);
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await IsProductInFavoriteServices(product._id);
                 setFavorite(res?.data?.data)
            } catch (ex) {
                setFavorite(ex?.response?.data?.data)
                // toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();

    }, );
    const handleAddToBasket = async () => {
        setDisplayBtn(current => !current)
        // setNumber(1)
        // console.log(displayBtn);
        const fetchData = async () => {
            try {
                const res = await basketServices(product._id);
                setNumber(res.data.data);
                toast.success(res?.data?.message)
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();
    }
    const handelPluss = (id) => {
        const fetchData = async () => {
            try {
                const res = await basketServices(product._id);
                // console.log(res.data.data);
                setNumber(res.data.data);
                toast.success(res?.data?.message)
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();
    }
    const handelmin = (id) => {
        const givData = async () => {
            try {
                const res = await updateBasketServices(product._id);
                // console.log(res.data.data);
                setNumber(res.data.data);
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        givData();
        if (number === 1) return setDisplayBtn(current => !current)
    }
    const  hanldelAddFavorite=()=>{
        setFavorite(current => !current)
        
        const fetchData = async () => {
            try {
                const res = await addToFavoriteServices(product._id);
                setNumber(res.data.data);
                toast.success(res?.data?.message)
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();
        
    }
   
    return (
        <div >

            <div>
                <div className=" flex flex-col gap-3 mt-3 bg-gray-50">
                    <div className="w-100 flex justify-between border rounded-lg px-3 pb-3 ">
                        <div className="flex gap-4">
                            <div className="flex  items-center  overflow-hidden pt-3">
                                <img className="rounded-lg " src={uploadsURL + product?.productPicture} alt="عکس محصول" width="400px"
                                    height="400px" />
                            </div>
                            <div className="flex flex-col justify-evenly   pt-4">
                                <div className="flex flex-col gap-3 text-dark">
                                    <p className=" text-xl">{product?.productName} </p>
                                    <p className="text-sm">{product?.productEnglishName}</p>
                                    <div className="flex gap-1 items-center">
                                        <p className="text-xl">برند : </p>
                                        <p className="text-lg"> {product?.productBrand}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p>بهای کالا :</p>
                                    <p className="text-2xl">{persianNumber(product?.productPrice)} تومان</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className="text-xl"> دسته :</p>
                                    <p>{product?.productFamily}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col  justify-between" >
                            <div className="pt-4 flex items-center h-50">
                                {/* <img src="../images/imageForHtml/product.jpg" alt="" width="120px" height="120px" />
                                <img src="../images/imageForHtml/product.jpg" alt="" width="120px" height="120px" />
                                <img src="../images/imageForHtml/product.jpg" alt="" width="120px" height="120px" /> */}
                            </div>
                            <div className="h-50 gap-3 flex justify-center align-items-end">
                                <button  title="افزودن به موردعلاقه ها" onClick={hanldelAddFavorite}>
                                    {favorite? <HeartIcon className="h-12 w-16 text-red-500" />:
                                    <HeartIcon2 className="h-12 w-16 text-red-500" />
                                    } 
                                </button>
                                {displayBtn ?
                                    <Button onClick={handleAddToBasket} className='bg-red w-full'>
                                        افزودن به سبد خرید
                                    </Button> :
                                    <div className=" flex items-center gap-2 border p-2 rounded-md  border-1 mt-4" id="${id}">
                                        <Button onClick={handelPluss} className="border-0 bg-transparent w-full" id="plus">+</Button>
                                        <p className="px-3" id="number">{persianNumber(number)}</p>
                                        <Button onClick={handelmin} className="border-0 bg-transparent w-full" id="mines">-</Button>
                                    </div>}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* <h1>{product?.productName}</h1> */}
        </div>
    );
}

