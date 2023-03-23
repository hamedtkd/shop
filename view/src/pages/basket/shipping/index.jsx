import { Button, persianNumber } from "@/components";
import { Header, Footer } from "@/layout";
import { useProfile } from "@/pages/user/profile/useProfile";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../basketOfProducts/useBasket";


export const Shipping = () => {
    const { finalNum } = useBasket()
    let postPrice = 0
    if (finalNum >= 250000) postPrice = 0
    else {
        postPrice = 30000
    }
    const {
        data,
    } = useProfile()
    console.log(data);
    // useEffect(() => {

    // }, []);
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <main className="container">

                <section className="flex">
                    <div className="flex flex-col gap-3  w-3/4  pb-3">
                        <div className="flex justify-between items-end border rounded-md  px-3 pb-3  ">
                            <div className="py-3 w-full flex flex-col gap-5">
                                <div className="">
                                    <p className="text-gray-500 text-xs">
                                        آدرس دریافت سفارش
                                    </p>
                                    <p className="text-lg">

                                        {data?.adress?data.adress:"نیاز به ویرایش اطلاعات دارید"}
                                    </p>
                                </div>
                                <div className="">
                                    <p className="text-gray-500 text-xs">
                                        شماره تلفن همراه
                                    </p>
                                    <p className="text-lg">
                                    {data?.phoneNumber?data.phoneNumber:"نیاز به ویرایش اطلاعات دارید"}
                                    </p>
                                </div>
                                <p className="text-gray-500 text-sm">
                                {data?.name&&data?.familyName?`${data?.name}  ${data?.familyName}`:"نیاز به ویرایش اطلاعات دارید"}
                                  {/* {`${data?.name}  ${data?.familyName}`} */}
                                </p>

                            </div>
                            <Button className='' onClick={()=>navigate('/user')} >
                                ویرایش
                            </Button>

                        </div>

                    </div>
                    <div className="flex w-1/4">
                        <div className=" flex flex-col gap-3 px-2">
                            <div className="border rounded-md px-2 flex flex-col gap-3 text-dark py-3">
                                <div className="flex justify-between items-centerr">
                                    <p className="text-xl"> قیمت کالا ها : </p>
                                    <p className="text-sm">{persianNumber(finalNum)} تومان</p>
                                </div>
                                <div className="flex justify-between items-centerr">
                                    <p className="text-danger text-xl">هزینه ارسال</p>
                                    <p className="text-sm">{postPrice ? `${persianNumber(postPrice)} تومان` : 'رایگان'} </p>
                                </div>
                                <hr />
                                <div className="flex flex-col gap-2">
                                    <p className="text-2xl">جمع سبد خرید:</p>
                                    <p className="text-center text-xl">{persianNumber(finalNum + postPrice)} تومان</p>
                                </div>
                                <div className="pt-3">
                                    <p className="text-center text-sm"> هزینه ارسال برای خریدهای بالای {persianNumber(250)} هزار تومان در Huif shop
                                        رایگان است، در غیر اینصورت هزینه ارسال به این مبلغ اضافه می شود.</p>
                                </div>
                                <Button className='w-full'>
                                    ثبت سفارش
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

        </>
    );
}

