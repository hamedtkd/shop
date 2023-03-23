import { loginServices } from '@/api/services/login'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export const useSignin  = () => {

    const signInSchema = yup.object({
        password: yup.string().required('لطفا گذرواژه خود را وارد کنید'),
        email: yup.string().required('لطفا نام کاربری یا ایمیل خود را وارد کنید'),
      });
      
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(signInSchema) });

      const navigate = useNavigate();
    
      const handelSignin = async (data) => {
        try {
          const res = await loginServices(data);
          Cookies.set('userName', res.data.userName, {
            expires: 1
          })
          Cookies.set('city', res.data.city, {
            expires: 1
          })
          navigate('/home');
          Cookies.set('token', res.data.token, {
            expires: 1
          })
          toast.success(res.data.message);
        } catch (ex) {
          toast.error(ex?.response?.data?.message);
        }
      }
     
      return {
        handelSignin,
        errors,
        register,
        handleSubmit,
    } 
}
 
