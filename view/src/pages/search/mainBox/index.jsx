import { Card, Card2, CheckBoxList, ListButton, persianNumber } from "@/components";
import { useContext, useEffect, useState } from "react";
import { useSearch } from "../useSearch";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { store } from "@/context";


export const MainBox = () => {
    const { products } = useContext(store)
    const { setFilter, setSort,setPrice,price } = useSearch();
    const [sortProducts, setSortProducts] = useState(false);
    const [filterHidden, setFilterHidden] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    const [hidden3, setHidden3] = useState(true);
    const navigate = useNavigate()
    const handleSortByMin = () => {
        setSort('sortByMin')
    }
    const handleSortByMax = () => {
        setSort('sortByMax')
    }
    const handleSortByBreand = (brand) => {
        setFilter(brand)
    }
    // const handleSortByDate = () => {
    //     const sortProductsByDate = products?.sort((a, b) => b.createdAt - a.createdAt)
    //     setSortProducts(sortProductsByDate)
    // }

    // useEffect(() => {
    //     setSortProducts()
    // }, [sortProducts]);

    return (
        <>
            <div className="w-full   ">
                <div className="flex gap-5 pb-4">
                    <button onClick={() => setFilterHidden(current => !current)} className=" items-center gap-3 text-primary max-md:flex max-sm:flex max-2xl:hidden max-xl:hidden max-lg:flex lg:hidden ">
                        <span>
                            <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-500" />
                        </span>
                        <p>
                            فیلترها
                        </p>
                    </button>
                    <span className="text-primary">مرتب سازی:</span>
                    <button onClick={handleSortByMin} className="text-sm text-gray-500 hover:text-red-500 focus:text-red-500">
                        کمترین قیمت
                    </button>
                    <button onClick={handleSortByMax} className="text-sm text-gray-500 hover:text-red-500 focus:text-red-500">
                        بیشترین قیمت
                    </button>

                </div>
                <div className="max-lg:hidden max-md:hidden max-sm:hidden border rounded-lg flex flex-wrap justify-center pt-3 gap-5">
                    {sortProducts ? sortProducts?.map((product) => { return <Card item={product} /> }) :
                        products?.map((product) => {
                            return <Card key={product.id} item={product} />
                        })
                    }

                </div>
                <div className="max-md:block max-sm:block max-2xl:hidden max-xl:hidden max-lg:block lg:hidden border rounded-lg flex flex-wrap justify-center gap-5">
                    {sortProducts ? sortProducts?.map((product) => { return <Card item={product} /> }) :
                        products?.map((product) => {
                            return <Card2 key={product._id} item={product} />
                        })
                    }

                </div>

                {
                    filterHidden ?
                        <div className="w-full h-full fixed z-50  bg-white left-0 bottom-0  right-0">
                            <div className="border ">
                                <div>
                                    <button className="flex justify-end w-full p-5 transition-all" onClick={() => setFilterHidden(current => !current)}>
                                        <XMarkIcon className="h-12 w-12 text-gray-500 px" />
                                    </button>
                                    <div>
                                        <button onClick={() => setHidden(current => !current)} type="button" className=" flex items-center justify-between w-full p-5 font-medium text-right border border-b-0 border-gray-200 rounded-t-lg  dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" >
                                            <span>دسته بندی محصولات</span>
                                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                                        </button>
                                    </div>
                                    <ul onClick={() => setFilterHidden(current => !current)} className={` ${hidden ? 'hidden' : 'block '}`} >
                                        <ListButton onClick={() => navigate('/search/product-list')} className='text-start text-sm text-gray-700' name='همه محصولات' />
                                        <ListButton onClick={() => { navigate('/search/sorom') }} className='text-start text-sm text-gray-700' name='سرم پوست' />
                                        <ListButton onClick={() => { navigate('/search/mask') }} className='text-start text-sm text-gray-700' name='ماسک صورت' />
                                        <ListButton onClick={() => { navigate('/search/cream') }} className='text-start text-sm text-gray-700' name='کرم ضدآفتاب' />

                                    </ul>
                                    <div>
                                        <button onClick={() => setHidden2(current => !current)} type="button" className=" flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200   dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <span>برند</span>
                                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                    <ul className={`  ${hidden2 ? 'hidden' : 'block '}`}>
                                        <CheckBoxList englishName={'Ebug'} persianName='ایباگ' onClick={(e) => { handleSortByBreand(e.target.value) }} />
                                        <CheckBoxList englishName={'La Faruer'} persianName='لا فرائور' onClick={(e) => { handleSortByBreand(e.target.value) }} />
                                        <CheckBoxList englishName={'biaoqoa'} persianName='بایو آکوآ' onClick={(e) => { handleSortByBreand(e.target.value) }} />
                                        <CheckBoxList englishName={'dipsens'} persianName='دیپ سنس' onClick={(e) => { handleSortByBreand(e.target.value) }} />
                                    </ul>
                                    <div>
                                        <button onClick={() => setHidden3(current => !current)} type="button" className=" flex items-center justify-between w-full p-5 font-medium text-right border border-b-0 border-gray-200  focus:border  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <span>محدوده قیمت</span>
                                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                    <div className={`rounded-b-lg  ${hidden3 ? 'hidden' : 'block '}`}>
                                        <div className="flex flex-col gap-5">

                                            <label htmlFor="rangeInput">
                                                {persianNumber(price)} تومان
                                            </label>
                                            <input min={0} max={2000000} name="rangeInput" type="range" onChange={(e) => setPrice(e.target.value)} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        : ''
                }
            </div>






        </>
    );
}

