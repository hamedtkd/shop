import { searchServices } from "@/api/services/search";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useSearch = () => {
    // const searchName=
    const [products, setProducts] = useState([]);
    const { searchName } = useParams()



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await searchServices(searchName);
                setProducts(res.data.data[0]);
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();
       
    }, [searchName]);

    return {
        products,
    }
}
 
