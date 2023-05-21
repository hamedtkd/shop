import { uploadsURL } from "@/api/constant";
import { Link, persianNumber } from "../shared";
import './index.css'

export const Card = ({ item }) => {
    return (
        <Link key={item._id} to={`/product/${item._id}`}>
            <div className="max-w-xs  w-custom bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
                <div className='flex justify-center h-full p-3' >
                    <img className="rounded-t-lg max-h-60 min-h-fit  w-52" src={uploadsURL + item?.productPicture} alt="عکس محصول" />
                </div>
                <div className="p-5 flex flex-col gap-4">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{item.productName}</p>
                    <a href={item.link} className="flex justify-between items-center px-3 py-2 text-lg font-medium text-center flex-wrap">
                        <p>
                            قیمت :
                        </p>
                        <p>
                            {persianNumber(item.productPrice)}تومان
                        </p>
                    </a>
                </div>
            </div>
        </Link>
    );
}

