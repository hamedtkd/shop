import { Button, Select, Textfield } from "@/components";
import { useProfile } from "./useProfile";

export const Profile = () => {
    const { handleCreatProfile,
        errors,
        register,
        handleSubmit,
        data,
        loader
    } = useProfile()
    return (
        <div className='w-3/4 px-5'>

            {loader ?
                <form className=" space-y-6  " onSubmit={handleSubmit(handleCreatProfile)}>
                    <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-5">
                        <Textfield
                            defaultValue={data?.name}
                            lable='نام '
                            type="text"
                            placeholder="نام ..."
                            validation={{ ...register('name') }}
                            error={errors.name?.message} />
                        <Textfield
                            defaultValue={data?.familyName}
                            lable=' نام خانوادگی'
                            type="text"
                            placeholder="نام خانوادگی..."
                            validation={{ ...register('familyName') }}
                            error={errors.familyName?.message} />
                        <Textfield
                            defaultValue={data?.userName}
                            lable='نام کاربری'
                            type="text"
                            placeholder="نام کاربری..."
                            validation={{ ...register('userName') }}
                            error={errors.userName?.message} />
                        <Textfield
                            defaultValue={data?.phoneNumber}
                            lable='تلفن همراه'
                            type="number"
                            placeholder='شماره تلفن همراه ...'
                            validation={{ ...register('phoneNumber', { maxLength: 11, minLength: 11 }) }}
                            error={errors.phoneNumber?.message} />
                        <Textfield
                            defaultValue={data?.email}
                            lable="ایمیل"
                            type="email"
                            autoComplete="email"
                            placeholder='ایمیل خود را وارد کنید...'
                            validation={{ ...register('email') }}
                            error={errors.email?.message} />
                        <Select
                            forLabale={'city'}
                            defaultValue={data?.city}
                            label={'شهر'}
                            validation={{ ...register('city') }}
                            error={errors.city?.message}
                            name="city"
                            id="city">
                            <option value="شیراز">شیراز</option>
                            <option value="تهران">تهران</option>
                            <option value="اصفهان"> اصفهان</option>
                        </Select>
                        <Textfield
                            defaultValue={data?.adress}
                            lable='آدرس'
                            type="text"
                            placeholder='آدرس محل زندگی...'
                            validation={{ ...register('adress') }}
                            error={errors.adress?.message} />
                        {/* <Textfield
                            defaultValue={data?.city}
                            lable='شهر'
                            type="text"
                            placeholder='شهر محل زندگی...'
                            validation={{ ...register('city') }}
                            error={errors.city?.message} /> */}
                        <Textfield
                            defaultValue={data?.post}
                            lable='کدپستی'
                            type="text"
                            placeholder='کد پستی...'
                            validation={{ ...register('post') }}
                            error={errors.post?.message} />
                    </div>
                    <div className='flex justify-end  hover:shadow-red-900'>
                        <Button
                            type="submit"
                            className=" "

                        >ارسال</Button>
                    </div>
                </form>
                :
                <div className='flex w-full items-center justify-center'>

                    <div role="status">
                        <svg aria-hidden="true" className="w-4/6 h-4/6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            }



        </div>
    );
}

    ;