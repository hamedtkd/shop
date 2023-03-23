import {
    useNavigate
} from "react-router-dom";
import {
    useForm
} from 'react-hook-form';
import {
    yupResolver
} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
    toast
} from 'react-toastify';
import {
    fetchProfileServices,
    profileServices
} from "@/api/services/profile";
import Cookies from "js-cookie";
import {
    useEffect,
    useState
} from "react";

export const useProfile = () => {
    const [data, setData] = useState();
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchProfileServices();
                setLoader(true)
                setData(res.data.data[0])
            } catch (ex) {
                toast.error(ex ?.response ?.data ?.message);
            }
        };
        fetchData();
    }, []);

    const signUpSchema = yup.object({
        name: yup.string().required('لطفا نام  خود را وارد کنید'),
        userName: yup.string().required('لطفا نام کاربری  خود را وارد کنید'),
        familyName: yup.string().required('لطفا نام خانوادگی خود را وارد کنید'),
        phoneNumber: yup.number().required('شماره تلفن همراه خوود را وارد کنید', {
            minLength: 10
        }),
        adress: yup.string().required('لطفا آدرس خود را وارد کنید'),
        city: yup.string().required('لطفا شهر محل خود را وارد کنید'),
        post: yup.string().required('لطفا کدپستی خود را وارد کنید'),
        email: yup.string().email().required('لطفا ایمیل خود را وارد کنید'),
    });
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
    } = useForm({
        resolver: yupResolver(signUpSchema)
    });
    const navigate = useNavigate();

    const handleCreatProfile = async (data) => {
        try {
            const res = await profileServices(data);
            Cookies.set('userName', res.data.newUserName, {
                expires: 1
            })
            Cookies.set('token', res.data.newToken, {
                expires: 1
            })
            Cookies.set('city', res.data.city, {
                expires: 1
            })
            toast.success(res.data.message);
            navigate('/home');

        } catch (ex) {
            toast.error(ex ?.response ?.data ?.message);
        }
    }
    return {
        handleCreatProfile,
        errors,
        register,
        handleSubmit,
        data,
        loader
    }

    ;
}