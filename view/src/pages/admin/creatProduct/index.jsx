import { BASE_INSTANCE } from "@/api/constant";
import { adminServices } from "@/api/services/admin";
import { Select, Textfield } from "@/components";
import axios from "axios";
import { Button } from "flowbite-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { useAdmin } from "./useAdmin";

export const CreatProduct = () => {
    const {
        errors,
        register,
        handleSubmit,
    } = useAdmin()

    const [file, setFile] = useState("");
    const [pic, setPic] = useState("");
    function blobToBase64(blob) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }
    file ? blobToBase64(file).then(res => {
        setPic(res)

    }) : null
    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop });


    const handelCraetProduct = async (data) => {
        const formData = new FormData()
        formData.append('productPicture', file)
        formData.append('productName', data.productName)
        formData.append('productDesc', data.productDesc)
        formData.append('productPrice', data.productPrice)
        formData.append('productTag', data.productTag)
        formData.append('productEnglishName', data.productEnglishName)
        formData.append('productFamily', data.productFamily)
        formData.append('productBrand', data.productBrand)

        try {
            const res = await adminServices(formData);
            toast.success(res.data.message);
        } catch (ex) {
            // console.log(ex?.response?.data);
            toast.error(ex?.response?.data?.message);
        }

    }

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-gray-50 rounded-lg px-5 pb-8">
                <div>
                    <h2 className="mt-6  text-3xl font-bold tracking-tight text-gray-900">
                        محصول
                    </h2>
                </div>
                <form className="mt-8 space-y-6 " onSubmit={handleSubmit(handelCraetProduct)}>
                    {/* <input type="hidden" name="remember" defaultValue="true" /> */}
                    <div className="rounded-2 border p-3 flex items-center flex-col" {...getRootProps()}>
                        <Textfield type={'file'}
                            {...getInputProps()}
                            error={errors.productPicture?.message} />
                        <img src={pic} width='80%' height='500px' alt="" />
                        {file?.name ? file.name : "upload your Article Thumbnail"}
                    </div>
                    <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-5">
                        <Textfield
                            lable='نام محصول'
                            type="text"
                            placeholder="نام محصول..."
                            validation={{ ...register('productName') }}
                            error={errors.productName?.message} />
                        <Textfield
                            validation={{ ...register('productEnglishName') }}
                            lable='نام انگلیسی محصول'
                            error={errors.productEnglishName?.message}
                            type="text"
                            placeholder='englishName'
                        />

                        <Textfield
                            validation={{ ...register('productBrand') }}
                            lable='برند محصول'
                            error={errors.productBrand?.message}
                            type="text"
                            placeholder='برند محصول'
                        />

                        <Textfield
                            id="productDesc"
                            name="productDesc"
                            lable="توضیحات محصول"
                            validation={{ ...register('productDesc') }}
                            placeholder="توضیحات محصول"
                            error={errors.productDesc?.message} />
                        <Textfield
                            validation={{ ...register('productPrice') }}
                            lable="قیمت محصول"
                            error={errors.productPrice?.message}
                            type="number"
                            placeholder="قیمت محصول"
                        />
                        <Select
                            forLabale={'productFamily'}
                            label={'دسته محصول'}
                            validation={{ ...register('productFamily') }}
                            error={errors.productFamily?.message}
                            name="productFamily"
                            id="productFamily">
                            <option value="cream">کرم</option>
                            <option value="sorom">سرم پوست</option>
                            <option value="jel">ژل</option>
                            <option value="mask">ماسک</option>
                        </Select>
                        <Select
                            forLabale={'productTag'}
                            label={'تگ محصول'}
                            validation={{ ...register('productTag') }}
                            error={errors.productTag?.message}
                            name="productTag"
                            id="productTag">
                            <option value="پرفروشترین">پرفروشترین</option>
                            <option value="پربازدیدترین">پربازدیدترین</option>
                            <option value="offer">تخفیف ها</option>
                        </Select>


                    </div>

                    <div className='flex justify-center  hover:shadow-red-900'>
                        <Button

                            type="submit"
                            className="w-full group relative flex  justify-center rounded-md border border-transparent bg-primary py-3 px-4 text-sm font-medium text-white hover:shadow-blue-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"

                        >ثبت محصول</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

