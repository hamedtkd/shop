
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { Textfield, Link, Button } from '@/components';
import { useSignup } from './useSignup';
import './index.css'

export  function Signup() {

  const { handleSignup,
    errors,
    register,
    handleSubmit,
  } = useSignup()

  return (
    <>
      <div className="body flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-gray-50 rounded-lg px-5 pb-8">
          <div>
            <h2 className="mt-6  text-3xl font-bold tracking-tight text-gray-900">
              عضویت
            </h2>
          </div>
          <form className="mt-8 space-y-6 " onSubmit={handleSubmit(handleSignup)}>
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="-space-y-px rounded-md shadow-sm flex flex-col gap-5">
            <Textfield
                lable='نام كاربری'
                type="text"
                // className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="نام کارری..."
                validation={{ ...register('userName') }}
                error={errors.userName?.message} />

              <Textfield
                lable='ایمیل خود را وارد کنید'
                type="email"
                autoComplete="email"
                // className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="ایمیل..."
                validation={{ ...register('email') }}
                error={errors.email?.message} />
              <Textfield
                validation={{ ...register('password') }}
                lable='گذرواژه خود را وارد کنید'
                error={errors.password?.message}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                clases='bg-gray'
                // className="relative block w-full appearance-none rounded-sm  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="گذرواژه..."
              />
              <Textfield
                validation={{ ...register('confirmPassword') }}
                lable='لطفا گذرواژه خود را دوباره وارد کنید'
                error={errors.confirmPassword?.message}
                id="confirm-password"
                type="password"
                autoComplete="current-password"
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                placeholder="تکرار گذرواژه..."
              />
            </div>
            <Link href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              قبلا ثبت نام کردید؟
            </Link>
            <div className='flex justify-center  hover:shadow-red-900'>
              <Button
                type="submit"
                className="w-full "
              
              >عضویت</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
