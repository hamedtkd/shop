import { Link, Textfield } from "@/components";
// import { Button } from "flowbite-react";
// import { useAdmin } from "../creatProduct/useAdmin";

export const AdminPage = () => {


    return (

        <div className="bg-blue-900-600 flex flex-wrap  justify-evenly container max-w-screen-xl mx-auto py-10 border rounded-2xl px-3">
            <div className="border border-primary px-3 py-3 rounded-lg  hover:bg-primary  hover:text-white">
                <Link className='w-full' to='/admin/creat-product'>
                    ساخت محصول 
                </Link>
            </div>
            <div className="border  border-primary px-3 py-3 rounded-lg  hover:bg-primary hover:text-white">
                <Link className='w-full' to='/admin/creatSlider'>
                    ساخت اسلایدر
                </Link>
            </div>
            
            
            
        </div>
    );
}

