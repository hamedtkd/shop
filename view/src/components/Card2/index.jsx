import { uploadsURL } from "@/api/constant";
import { Link, persianNumber } from "../shared";

export const Card2 = ({item}) => {
    return (
        <Link key={item._id} to={`/product/${item._id}`}>
        <div className=" bg-white border flex gap-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div className='flex justify-start h-full p-3' >
                <img className="rounded-t-lg  w-48 " src={uploadsURL + item?.productPicture} alt="عکس محصول" />
            </div>
            <div className="p-5 flex flex-col justify-between gap-4">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{item.productName}</p>
                <div  className="flex justify-between items-center px-3 py-2 text-lg font-medium text-center flex-wrap">
                    <p>
                        قیمت :
                    </p>
                    <p>
                        {persianNumber(item.productPrice)}تومان
                    </p>
                </div>
            </div>
        </div>
    </Link>
      );
}
 
