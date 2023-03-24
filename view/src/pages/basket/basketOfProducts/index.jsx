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
    const handleSubmit = () => {
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
                    : <>
                        <section className="container">
                            <div className=" flex justify-between gap-3 mt-3 " >
                                <div className="flex flex-col gap-3  w-full  pb-3">
                                    {data?.map((p) => {
                                        return (
                                            <div key={p._id} className="flex  border rounded-md  px-3 pb-3  ">
                                                <div className="w-full flex   ">
                                                    <div className="flex flex-col items-center justify-between w-1/4  max-md:w-1/2">
                                                        <div>
                                                            <img src={uploadsURL + p.productPicture} alt="عکس محصول" width="100%" />
                                                        </div>
                                                        <div className="w-28 flex items-center gap-2 border p-2 rounded-md  border-1 mt-4" id="${id}">
                                                            <button onClick={() => handelPluss(p.productId)} className="border-0 bg-transparent w-1/3" id="plus">+</button>
                                                            <p className="px-3" id="number">{persianNumber(p.number)}</p>
                                                            <button onClick={() => handelmin(p.productId)} className="border-0 bg-transparent w-1/3" id="mines">-</button>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-between  gap-3 w-full pt-4">
                                                        <div className="flex flex-col gap-3 text-dark">
                                                            <p className=" text-xl"> {p.productName}</p>
                                                            <p className="text-sm">  {p.productEnglishName}</p>
                                                            <div className="flex gap-1 items-center">
                                                                <p className="text-xl">برند : </p>
                                                                <p className="text-lg"> {p?.productBrand} </p>
                                                            </div>
                                                        </div>
                                                        <div className="w-full justify-items-end flex flex-col gap-2">
                                                            <div className="flex justify-between flex-wrap  ">
                                                                <p>قیمت واحد:</p>
                                                                <div className="flex gap-1">
                                                                    <p >{persianNumber(p?.productPrice)} </p>
                                                                    <p>تومان </p>
                                                                </div>

                                                            </div>
                                                            <hr />
                                                            <div className="flex justify-between flex-wrap  ">
                                                                <p className="text-xl">قیمت نهایی:</p>
                                                                <div className="flex gap-1">
                                                                    <p className="text-xl"> {persianNumber((p?.productPrice) * p.number)} </p>
                                                                    <p>تومان </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="flex w-1/4 max-lg:hidden max-md:hidden max-sm:hidden">
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
                        <section className="container  max-md:block max-sm:block max-2xl:hidden max-xl:hidden max-lg:block lg:hidden ">
                            <div className=" border border-gray-300 rounded-lg p-3">

                                <div className="flex justify-between items-center">
                                    <p className=""> قیمت کالا ها : </p>
                                    <p className="text-sm">{persianNumber(finalNum)} تومان</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-danger ">تخفیف کل:</p>
                                    <p className="text-sm">{persianNumber(0)} تومان</p>
                                </div>
                                <div className="flex justify-between items-center ">
                                    <p className="">جمع سبد خرید:</p>
                                    <p className="text-center ">{persianNumber(finalNum)} تومان</p>
                                </div>
                                <div className="pt-3">
                                    <p className="text-dark text-xs ">محصولات موجود در سبد شما ثبت و رزرو نشده اند، برای ثبت سفارش مراحل
                                        بعدی را تکمیل کنید. </p>
                                </div>
                            </div>

                        </section>
                        <div className=" w-full max-md:block max-sm:block max-2xl:hidden max-xl:hidden max-lg:block lg:hidden border border-gray-300 rounded-lg p-5 mt-5 fixed z-3 bg-white left-0 bottom-0 right-0">
                            <div className="flex justify-between">
                            <div className="w-3/5">
                                    <Button onClick={handleSubmit} className='w-full'>
                                        ادامه ثبت سفارش
                                    </Button>
                                </div>
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <p className="">جمع سبد خرید:</p>
                                    <p className="text-center text-xs ">{persianNumber(finalNum)} تومان</p>
                                </div>
                             
                            </div>
                        </div>
                    </>

                }


            </main>
        </>
    );
}

