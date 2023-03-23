import { Button } from "flowbite-react";
import { toast } from "react-toastify";

export const mindAndPlus = () => {
    const [displayBtn, setDisplayBtn] = useState(true);
    const [number, setNumber] = useState(0);
    const handelPluss = (id) => {
        const fetchData = async () => {
            try {
                const res = await basketServices(product._id);
                console.log(res.data.data);
                setNumber(res.data.data);
                toast.success(res?.data?.message)
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();
    }
    const handelmin = (id) => {
        const givData = async () => {
            try {
                const res = await updateBasketServices(product._id);
                console.log(res.data.data);
                setNumber(res.data.data);
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        givData();
        if (number === 1) return setDisplayBtn(current => !current)
    }
    return (
        <div className="w-1/4 flex items-center gap-2 border p-2 rounded-md  border-1 mt-4" id="${id}">
            <Button onClick={handelPluss} className="border-0 bg-transparent" id="plus">+</Button>
            <p className="px-3" id="number">{number}</p>
            <Button onClick={handelmin} className="border-0 bg-transparent" id="mines">-</Button>
        </div>
    );
}

