import { uploadsURL } from "@/api/constant";
import { Link, persianNumber } from "../shared";
// import { Link, persianNumber } from "../shared";

export const BasketCard = ({ item ,handelmin,handelPluss }) => {
    return (

        <div className="flex  border rounded-md  px-3 pb-3  ">
            <div className="w-full flex   ">
                <div className="flex flex-col items-center justify-between w-1/4  max-md:w-1/2">
                <Link key={item.productId} to={`/product/${item.productId}`}>
                    <div>
                        <img src={uploadsURL + item.productPicture} alt="عکس محصول" width="100%" />
                    </div>
                </Link>

                    <div className="w-28 flex items-center gap-2 border p-2 rounded-md  border-1 mt-4" id="${id}">
                        <button onClick={() => handelPluss(item.productId)} className="border-0 bg-transparent w-1/3" id="plus">+</button>
                        <p className="px-3" id="number">{persianNumber(item.number)}</p>
                        <button onClick={() => handelmin(item.productId)} className="border-0 bg-transparent w-1/3" id="mines">-</button>
                    </div>
                </div>
                <Link key={item.productId} to={`/product/${item.productId}`}>
                    <div className="flex flex-col justify-between  gap-3 w-full pt-4">
                        <div className="flex flex-col gap-3 text-dark">
                            <p className=" text-xl"> {item.productName}</p>
                            <p className="text-sm">  {item.productEnglishName}</p>
                            <div className="flex gap-1 items-center">
                                <p className="text-xl">برند : </p>
                                <p className="text-lg"> {item?.productBrand} </p>
                            </div>
                        </div>
                        <div className="w-full justify-items-end flex flex-col gap-2">
                            <div className="flex justify-between flex-wrap  ">
                                <p>قیمت واحد:</p>
                                <div className="flex gap-1">
                                    <p >{persianNumber(item?.productPrice)} </p>
                                    <p>تومان </p>
                                </div>

                            </div>
                            <hr />
                            <div className="flex justify-between flex-wrap  ">
                                <p className="text-xl">قیمت نهایی:</p>
                                <div className="flex gap-1">
                                    <p className="text-xl"> {persianNumber((item?.productPrice) * item.number)} </p>
                                    <p>تومان </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </Link>
            </div>

        </div>

    );
}
