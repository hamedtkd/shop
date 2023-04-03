
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
import { adminServices } from "@/api/services/admin";
  export const useAdmin = () => {
  
    const createProuductSchema = yup.object({
      productName: yup.string().required('نام محصول را وارد کنید'),
      productDesc: yup.string().required("توضیحات محصول را وارد کنید"),
      productPrice: yup.string().required("قیمت محصول را وارد کنید"),
      // productTag :yup.string().required("تگ محصول را وارد کنید"),  
      productFamily :yup.string().required("دسته محصول را وارد کنید"),  
      productEnglishName :yup.string().required("نام انگلیسی محصول را وارد کنید"),  
      productBrand :yup.string().required("ّبرند محصول را وارد کنید"),  

      // productPicture: yup.mixed()
      // .test('required', "شما باید عکس محصول را اضافه کنید", (value) =>{
      //   return value && value.length
      // } )
      // .test("type", "فقط فرمت jpeg قیول است", function (value) {
      //   return value && value[0] && value[0].type === "image/jpeg";
    });
    // const [, set] = useState();
    const {
      register,
      handleSubmit,
      formState: {
        errors
      },
    } = useForm({
      resolver: yupResolver(createProuductSchema)
    });

    return {
      errors,
      register,
      handleSubmit
    }
  
    ;
  }