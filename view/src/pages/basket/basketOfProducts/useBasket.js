import { basketServices, fetchBasketServices, updateBasketServices } from "@/api/services/basket";
import { useEffect, useState } from "react";

export const useBasket = () => {
    const [finalNum, setFinalNum] = useState(0);

    // const [number, setNumber] = useState(0);
    const [data, setData] = useState();
    const handelPluss = (id) => {
        const fetchData = async () => {
            try {
                const res = await basketServices(id);
                setFinalNum(res.data.finallyNum)
                // toast.success(res?.data?.message)

            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();
    }
    const handelmin = (id) => {
        const givData = async () => {
            try {
                const res = await updateBasketServices(id);
                setFinalNum(res.data.finallyNum)
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        givData();

    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchBasketServices();
                setData(res.data.data[0]);
                setFinalNum(res.data.finallyNum)
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();

    }, [finalNum]);
    return{
        finalNum,
        handelmin,
        handelPluss,
        data,
        

    }
}
 
