import { BASE_INSTANCE } from "@/api/constant";
import { fetchFavoriteServices } from "@/api/services/favorite";
import { Button, Textfield ,Card} from "@/components";
import { data } from "autoprefixer";

import { useEffect, useState } from "react";


export const MyFavorite = () => {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchFavoriteServices();
                setData(res.data.data[0]);

                toast.success(res.data.message)
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();

    }, []);
    return (
        <div className='w-3/4 px-5 flex flex-wrap gap-3'>
            {data?.map((item=>{
                item._id = item.productId
                return(
                    <Card item={item}/>
                )
            }))}
        </div>
    );
}