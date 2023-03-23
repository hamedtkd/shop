import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';
import {
  signUpServices
} from '@/api/services/signUp';
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
export const useSignup = () => {

  const signUpSchema = yup.object({
    userName: yup.string().required('لطفا نام کاربری خود را وارد کنید'),
    password: yup.string().required('لطفا گذرواژه خود را وارد کنید'),
    email: yup.string().email().required('لطفا ایمیل خود را وارد کنید'),
    confirmPassword: yup.string().required('لطفا گذرواژه خود را دوباره وارد کنید')
  });
  // const [, set] = useState();
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

  const handleSignup = async (data) => {
    try {
      const res = await signUpServices(data);
      toast.success(res.data.message);
      navigate('/signin')
    } catch (ex) {
      console.log(ex?.response?.data);
      toast.error(ex?.response?.data?.message);
    }
  }
  return {
    handleSignup,
    errors,
    register,
    handleSubmit
  }

  ;
}