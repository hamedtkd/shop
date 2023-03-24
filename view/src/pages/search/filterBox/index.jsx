import { Link, ListButton } from "@/components";
import { CheckCoxList } from "@/components/shared/CheckBoxList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { current } from "tailwindcss/colors";
import { useSearch } from "../useSearch";

export const FilterBox = () => {
    const [hidden, setHidden] = useState(true);
    const [hidden2, setHidden2] = useState(true);
    const [hidden3, setHidden3] = useState(true);
    const navigate = useNavigate()
    // const [searchName, setSearchName] = useState();
    useSearch()

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
                        <CheckCoxList englishName={'EBUG'} persianName='ایباگ'  />
                        <CheckCoxList englishName={'La Faruer'} persianName='لا فرائور' onClick={(e)=>{console.log(e.target.value)}}  />
                        <CheckCoxList englishName={'biaoqoa'} persianName='بایو آکوآ'  />
                        <CheckCoxList englishName={'dipsens'} persianName='دیپ سنس'  />
                    </ul>
                    <div>
                        <button onClick={() => setHidden3(current => !current)} type="button" className=" flex items-center justify-between w-full p-5 font-medium text-right border border-b-0 border-gray-200  focus:border  dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <span>محدوده قیمت</span>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`rounded-b-lg  ${hidden3 ? 'hidden' : 'block '}`}>
                        <input type="range" />

                    </div>
                </div>
            </div>
        </>
    );
}

