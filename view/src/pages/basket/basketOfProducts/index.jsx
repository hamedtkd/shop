import { uploadsURL } from "@/api/constant";
import { basketServices, fetchBasketServices, updateBasketServices, } from "@/api/services/basket";
import { Button, Link, persianNumber } from "@/components";
import { Footer, Header } from "@/layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.css"
import { useBasket } from "./useBasket";

export const BasketOfProduct = () => {
    // const [finalNum, setFinalNum] = useState(0);

    // // const [number, setNumber] = useState(0);
    // const [data, setData] = useState();
    // const handelPluss = (id) => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await basketServices(id);
    //             setFinalNum(res.data.finallyNum)
    //             // toast.success(res?.data?.message)

    //         } catch (ex) {
    //             toast.error(ex?.response?.data?.message);
    //         }
    //     };
    //     fetchData();
    // }
    // const handelmin = (id) => {
    //     const givData = async () => {
    //         try {
    //             const res = await updateBasketServices(id);
    //             setFinalNum(res.data.finallyNum)
    //         } catch (ex) {
    //             toast.error(ex?.response?.data?.message);
    //         }
    //     };
    //     givData();

    // }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetchBasketServices();
    //             setData(res.data.data[0]);
    //             setFinalNum(res.data.finallyNum)
    //         } catch (ex) {
    //             toast.error(ex?.response?.data?.message);
    //         }
    //     };
    //     fetchData();

    // }, [finalNum]);
    const { finalNum,
        handelmin,
        handelPluss,
        data, } = useBasket()
        const navigate = useNavigate()
        const handleSubmit =()=>{
            navigate('/basket/shipping')
        }

    return (
        <>
             <main className="container">
                <div className="pt-3 pe-4 flex border-b mb-6">
                    <p className=" title">سبد خرید</p>
                </div>
                {!data ?
                    <div>
                        <h1>سبد خرید شما خالی است</h1>
                    </div>
                    :
                    <section className="container">
                        <div className=" flex justify-between gap-3 mt-3 " >
                            <div className="flex flex-col gap-3  w-3/4  pb-3">
                                {data?.map((p) => {
                                    return (
                                        <div key={p._id} className="flex justify-between border rounded-md  px-3 pb-3  ">
                                            <div className="flex  gap-4 w-3/4">
                                                <div className="flex items-center w-1/4 ">
                                                    <img src={uploadsURL + p.productPicture} alt="عکس محصول" width="100%" />
                                                </div>
                                                <div className="flex flex-col gap-3 w-3/4  pt-4">
                                                    <div className="flex flex-col gap-3 text-dark">
                                                        <p className=" text-xl"> {p.productName}</p>
                                                        <p className="text-sm">  {p.productEnglishName}</p>
                                                        <div className="flex gap-1 items-center">
                                                            <p className="text-xl">برند : </p>
                                                            <p className="text-lg"> {p?.productBrand} </p>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/4 flex items-center gap-2 border p-2 rounded-md  border-1 mt-4" id="${id}">
                                                        <Button onClick={() => handelPluss(p.productId)} className="border-0 bg-transparent" id="plus">+</Button>
                                                        <p className="px-3" id="number">{persianNumber(p.number)}</p>
                                                        <Button onClick={() => handelmin(p.productId)} className="border-0 bg-transparent" id="mines">-</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-end  w-1/4 pb-4">
                                                <div className="w-full flex flex-col gap-2">
                                                    <div className="flex justify-between  ">
                                                        <p>قیمت واحد:</p>
                                                        <div className="flex gap-1">
                                                            <p >{persianNumber(p?.productPrice)} </p>
                                                            <p>تومان </p>
                                                        </div>

                                                    </div>
                                                    <hr />
                                                    <div className="flex justify-between  ">
                                                        <p className="text-xl">قیمت نهایی:</p>
                                                        <div className="flex gap-1">
                                                            <p className="text-xl"> {persianNumber((p?.productPrice) * p.number)} </p>
                                                            <p>تومان </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex w-1/4">
                                <div className=" flex flex-col gap-3 px-2">
                                    <div className="border rounded-md px-2 flex flex-col gap-3 text-dark py-3">
                                        <div className="flex justify-between items-centerr">
                                            <p className="text-xl"> قیمت کالا ها : </p>
                                            <p className="text-sm">{persianNumber(finalNum)} تومان</p>
                                        </div>
                                        <div className="flex justify-between items-centerr">
                                            <p className="text-danger text-xl">تخفیف کل:</p>
                                            <p className="text-sm">{persianNumber(0)} تومان</p>
                                        </div>
                                        <hr />
                                        <div className="flex flex-col gap-2">
                                            <p className="text-2xl">جمع سبد خرید:</p>
                                            <p className="text-center text-xl">{persianNumber(finalNum)} تومان</p>
                                        </div>
                                        <div className="pt-3">
                                            <p className="text-center text-sm"> هزینه ارسال برای خریدهای بالای {persianNumber(250)} هزار تومان در Huif shop
                                                رایگان است، در غیر اینصورت هزینه ارسال به این مبلغ اضافه می شود.</p>
                                        </div>
                                        <Button onClick={handleSubmit} className='w-full'>
                                            ادامه ثبت سفارش
                                        </Button>
                                    </div>
                                    <div>
                                        <p className="text-dark text-xs ">محصولات موجود در سبد شما ثبت و رزرو نشده اند، برای ثبت سفارش مراحل
                                            بعدی را تکمیل کنید. </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>
                }


            </main>
        </>
    );
}

