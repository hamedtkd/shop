import { CheckBoxList, Link, ListButton, persianNumber } from "@/components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearch } from "../useSearch";

export const FilterBox = () => {
    const { setFilter,setPrice ,price} = useSearch();
    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    const [hidden3, setHidden3] = useState(true);
  
    const navigate = useNavigate()
    const handleSortByBreand = (brand) => {
        setFilter(brand);
    }

    return (
        <>
            <div className="w-1/5 border rounded-lg max-lg:hidden max-md:hidden max-sm:hidden">
                <div>
                    <div>
                        <button onClick={() => setHidden(current => !current)} type="button" className=" flex items-center justify-between w-full p-5 font-medium text-right border border-b-0 border-gray-200 rounded-t-lg  dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" >
                            <span>دسته بندی محصولات</span>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

                        </button>
                    </div>
                    <ul className={` ${hidden ? 'hidden' : 'block '}`} >
                        <ListButton onClick={() => navigate('/search/product-list')} className='text-start text-sm text-gray-700' name='همه محصولات' />
                        <ListButton onClick={() => navigate('/search/sorom')} className='text-start text-sm text-gray-700' name='سرم پوست' />
                        <ListButton onClick={() => navigate('/search/mask')} className='text-start text-sm text-gray-700' name='ماسک صورت' />
                        <ListButton onClick={() => navigate('/search/cream')} className='text-start text-sm text-gray-700' name='کرم ضدآفتاب' />


                    </ul>
                    <div>
                        <button onClick={() => setHidden2(current => !current)} type="button" className=" flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200   dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <span>برند</span>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <ul className={`  ${hidden2 ? 'hidden' : 'block '}`}>
                        <CheckBoxList englishName={'EBUG'} persianName='ایباگ' onClick={(e) => { handleSortByBreand(e.target.value) }} />
                        <CheckBoxList englishName={'La Faruer'} persianName='لا فرائور' onClick={(e) => { handleSortByBreand(e.target.value) }} />
                        <CheckBoxList englishName={'biaoqoa'} persianName='بایو آکوآ' onClick={(e) => { handleSortByBreand(e.target.value) }} />
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
                            <input min={0} max={2000000}  name="rangeInput" type="range" onChange={(e)=>setPrice(e.target.value)} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

