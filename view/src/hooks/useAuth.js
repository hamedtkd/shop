import Cookies from "js-cookie";
import {
    useEffect
} from "react";
import {
    useLocation,
    useNavigate
} from "react-router-dom";


export const useAuth = () => {
    const {
        pathname
    } = useLocation()
    const navigat = useNavigate()
    return (
        useEffect(() => {
            if ([ '/'].includes(pathname))
                navigat('/home')
            if (!Cookies.get('token') && ['/user'].includes(pathname))
                return navigat('/signin')
            if (!Cookies.get('token'))
                if (['/signin'].includes(pathname))
                    return navigat('/signin')
                else {
                    navigat('/signup')
                }
        }, [])
    );
}