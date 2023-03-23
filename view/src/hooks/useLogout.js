import {
    useNavigate
} from "react-router-dom";
import Cookies from 'js-cookie';
import { BASE_INSTANCE } from "@/api/constant";

export const useLogOut = () => {
    const navigate = useNavigate();
    const handelLogout =()=>{
        Cookies.remove('token');
        Cookies.remove('userName');
        BASE_INSTANCE.defaults.headers.common['Authorization'] = null;
        navigate('/signin');
    }
    return {handelLogout}
}