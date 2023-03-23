import Logo from "@/components/Logo";
import { Button, Link, persianNumber, SearchInput } from "@/components/shared";
import { ShoppingCartIcon, SupportIccon } from "@/components/shared/icons";
import { UserIcon } from "@/components/shared/icons";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { ReceiptPercentIcon } from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/outline";


import './index.css'
import { fetchBasketServices } from "@/api/services/basket";
import { useSignin } from "@/pages/singin/useSignin";
import Cookies from "js-cookie";
import { useLogOut } from "@/hooks/useLogout";


export const Header = ({basket}) => {
    const {handelLogout}=useLogOut()
    const  userName = Cookies.get('userName')
    const  city = Cookies.get('city')

    const [dataOfBasket, setDataOfBasket] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchBasketServices();
                setDataOfBasket(res.data.data[0].length);
            } catch (ex) {
                // toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();
    }, [basket]);
    if (dataOfBasket === 0) setDataOfBasket(false)
    return (
        <header className="py-5">
            <nav className="container mx-auto ">
                <div className="flex justify-between">
                    <div className="flex w-4/5">
                        <Link to='/home'>
                            <Logo />
                        </Link>
                        <SearchInput className='w-4/5' />
                    </div>
                    <div className="flex justify-end gap-7 w-1/5">
                        <button href className='bg-transparent relative user-section'>
                           
                            <UserIcon className="w-9" />
                            <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 dropdown hidden left-0 `}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link href={'/user'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{userName?userName:null}</Link>
                                    </li>
                                    <li>
                                        
                                       <button onClick={handelLogout} className="w-full rounded-md mt-2 bg-red-600 text-white block px-4 py-2  hover:rounded-2xl">خروج از حساب کاربری</button>
                                    </li>
                                    <li>
                                        {/* <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">سرم پوست</a> */}
                                    </li>
                                </ul>
                                {/* <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                </div> */}
                            </div>
                        </button>
                        <Link href={'/basket'} className='bg-transparent relative'>
                            <ShoppingCartIcon className="w-9" />
                            <p className="text-red-500 absolute top-7">

                                {dataOfBasket?persianNumber(dataOfBasket) :null}
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between py-5">
                    <ul className="flex gap-10">
                        <li className='flex flex-col gap-5 prouduct-section relative'>
                            <Link className='flex gap-3 items-center ' href={'/pruducts'}>
                                <Bars3Icon className="h-6 w-6 text-gray-500 pointer" />
                                دسته بندی محصولات
                            </Link>
                            <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 dropdown hidden top-6 `}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">کرم ضد آفتاب</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ماسک صورت</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">سرم پوست</a>
                                    </li>
                                </ul>
                                {/* <div className="py-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                </div> */}
                            </div>
                        </li>
                        <li >
                            <Link className='flex gap-3 items-center' href={'/offers'}>
                                <ReceiptPercentIcon className="h-6 w-6 text-gray-500" />
                                تخفیف ها و پیشنهاد ما
                            </Link>
                        </li>
                        <li>
                            <Link className='flex gap-3 items-center' href={'/most_populer'}>
                                <FireIcon className="h-6 w-6 text-gray-500" />
                                پرفروشترین ها
                            </Link>
                        </li>
                        <li>
                            <Link className='flex gap-3 items-center' href={'/support'}>
                                <SupportIccon />
                                پشتیبانی
                            </Link>
                        </li>
                    </ul>
                    <Link href='/user' className="flex gap-3">
                        <MapPinIcon className="h-6 w-6 text-gray-500" />
                        <p>
                             ارسال به {city}
                        </p>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

