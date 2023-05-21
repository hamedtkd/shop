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
import Cookies from "js-cookie";
import { useLogOut } from "@/hooks/useLogout";
import { MainUrl } from "@/api/constant";
import { useSearch } from "@/hooks/useSearch";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { Sidebar } from "flowbite-react";
import { current } from "tailwindcss/colors";
import { XMarkIcon } from "@heroicons/react/24/outline";



export const Header = ({ basket }) => {
    const { handelLogout } = useLogOut()
    const userName = Cookies.get('userName')
    const city = Cookies.get('city')
    const [hidden, setHidden] = useState(false);
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
    const { handleSerach, handleStopSerach } = useSearch()
    if (dataOfBasket === 0) setDataOfBasket(false)
    return (
        <>
            <header className="py-5 max-lg:hidden max-md:hidden max-sm:hidden ">
                <nav className="container mx-auto ">
                    <div className="flex justify-between">
                        <div className="flex w-4/5">
                            <Link to='/home'>
                                <Logo />
                            </Link>
                            <SearchInput  onSubmit={(e) => {

                                e.preventDefault();
                                handleSerach(e)}}  className='w-4/5' />
                        </div>
                        <div className="flex justify-end gap-7 w-1/5">
                            <button href className='bg-transparent relative user-section'>

                                <UserIcon className="w-9" />
                                <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 dropdown hidden left-0 `}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link href={'/user'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{userName ? userName : null}</Link>
                                        </li>
                                        <li>

                                            <button onClick={handelLogout} className="w-full rounded-md mt-2 bg-red-600 text-white block px-4 py-2  hover:rounded-2xl">خروج از حساب کاربری</button>
                                        </li>
                                        <li>
                                        </li>
                                    </ul>

                                </div>
                            </button>
                            <Link href={'/basket'} className='bg-transparent relative'>
                                <ShoppingCartIcon className="w-9" />
                                <p className="text-red-500 absolute top-7">

                                    {dataOfBasket ? persianNumber(dataOfBasket) : null}
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-between py-5">
                        <ul className="flex gap-10">
                            <li className='flex flex-col gap-5 prouduct-section relative'>
                                <Link className='flex gap-3 items-center ' href={'/search/product-list'}>
                                    <Bars3Icon className="h-6 w-6 text-gray-500 pointer" />
                                    دسته بندی محصولات
                                </Link>
                                <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 dropdown hidden top-6 `}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link to={`${MainUrl}search/cream`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">کرم ضد آفتاب</Link>
                                        </li>
                                        <li>
                                            <Link to={`${MainUrl}search/mask`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ماسک صورت</Link>
                                        </li>
                                        <li>
                                            <Link to={`${MainUrl}search/sorom`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">سرم پوست</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <Link className='flex gap-3 items-center' to={`${MainUrl}search/offer`}>
                                    <ReceiptPercentIcon className="h-6 w-6 text-gray-500" />
                                    تخفیف ها و پیشنهاد ما
                                </Link>
                            </li>
                            <li>
                                <Link className='flex gap-3 items-center' to={`${MainUrl}search/most-populer`}>
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
                                ارسال به {city ? city : ''}
                            </p>
                        </Link>
                    </div>
                </nav>
            </header>
            <div className={`h-full w-fit slidebar z-50 ${!hidden ? ' -right-96' : ' right-0'} `}>
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                className='text-end text-base-0 text-3xl '
                                onClick={() => setHidden(current != current)}
                                icon={XMarkIcon}
                            >
                                {/* <XMarkIcon className="h-12 w-12 text-gray-500 px" /> */}
                            </Sidebar.Item>
                            <Sidebar.Collapse className="text-start"
                                icon={Bars3Icon}
                                label='دسته بندی محصولات'
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <Link to={`${MainUrl}search/cream`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">کرم ضد آفتاب</Link>
                                    </li>
                                    <li>
                                        <Link to={`${MainUrl}search/mask`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ماسک صورت</Link>
                                    </li>
                                    <li>
                                        <Link to={`${MainUrl}search/sorom`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">سرم پوست</Link>
                                    </li>
                                </ul>
                            </Sidebar.Collapse>
                            <Sidebar.Item
                                icon={ReceiptPercentIcon}
                            >
                                <Link className='flex gap-3 items-center' to={`${MainUrl}search/offer`}>
                                    تخفیف ها و پیشنهاد ما
                                </Link>
                            </Sidebar.Item>
                            <Sidebar.Item
                                icon={FireIcon}
                            >
                                <Link className='flex gap-3 items-center' to={`${MainUrl}search/most-populer`}>
                                    پرفروشترین ها
                                </Link>
                            </Sidebar.Item>
                            <Sidebar.Item
                                icon={SupportIccon}
                            >
                                <Link className='flex gap-3 items-center' href={'/support'}>
                                    پشتیبانی
                                </Link>
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <header className="py-5 max-md:block max-sm:block max-2xl:hidden max-xl:hidden max-lg:block lg:hidden">
                <nav className="container mx-auto ">
                    <div className="flex justify-between pb-5 border border-x-0 border-t-0 border-b-gray-100 ">
                        <button onClick={() => { setHidden(current => !current) }}>
                            <Bars3Icon className="h-12 w-12 text-gray-700 pointer" />
                        </button>


                        <div className="flex">
                            <Link to='/home'>
                                <Logo />
                            </Link>
                        </div>
                        <div>
                            <Link to='/support'>
                                <QuestionMarkCircleIcon className="h-12 w-12 text-gray-700" />

                            </Link>
                        </div>
                    </div>
                    <div className="pt-5 flex justify-between">
                        <SearchInput onBlur={() => handleStopSerach()} onFocus={(e) => handleSerach(e)} className='w-4/5' />
                        <div className="flex gap-5 items-center">
                            <div>
                                <Link href={'/basket'} className='bg-transparent relative'>
                                    <ShoppingCartIcon className="w-8" />
                                    <p className="text-red-500 absolute top-7">
                                        {dataOfBasket ? persianNumber(dataOfBasket) : null}
                                    </p>
                                </Link>
                            </div>
                            <button href className='bg-transparent relative user-section'>

                                <UserIcon className="w-8" />
                                <div id="dropdownNavbar" className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 dropdown hidden left-0 `}>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link href={'/user'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{userName ? userName : null}</Link>
                                        </li>
                                        <li>

                                            <button onClick={handelLogout} className="w-full rounded-md mt-2 bg-red-600 text-white block px-4 py-2  hover:rounded-2xl">خروج از حساب کاربری</button>
                                        </li>
                                        <li>
                                        </li>
                                    </ul>

                                </div>
                            </button>
                        </div>

                    </div>
                </nav>
            </header>
        </>

    );
}

