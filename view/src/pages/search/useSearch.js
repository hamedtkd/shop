import {
    searchServices
} from "@/api/services/search";
import { store } from "@/context";
import {
    useContext,
    useEffect,
    useState
} from "react";
import {
    useParams
} from "react-router-dom";
import {
    toast
} from "react-toastify";

export const useSearch = () => {
    const { products, setProducts } = useContext(store)

    // const [products, setProducts] = useState([]);
    const {
        searchName
    } = useParams()
    const [filter, setFilter] = useState([]);
    const [sort, setSort] = useState([]);
    const [price, setPrice] = useState(20000000);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await searchServices({searchName,filter,sort,price});
                setProducts(res.data.data[0]);
            } catch (ex) {
                toast.error(ex ?.response ?.data ?.message);
            }
        };
        fetchData();
    }, [searchName,filter,sort,price]);

    return {
        setFilter,
        setSort,
        price,
        setPrice
    }
}