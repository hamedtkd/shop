import { ListButton } from '@/components';
import { useLogOut } from '@/hooks/useLogout';
import { Footer, Header } from '@/layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyFavorite } from './MyFavorite';
import { Profile } from './profile';

export function User() {
    const navigate = useNavigate();
    const [main, setMain] = useState('');

    return (
        <>
            <Header />
            <main className='container mx-auto max-w-lg pb-5' >

                <div className='flex'>
                    <div className='w-1/4'>
                        <ul className='border border-gray-500 rounded-lg'>
                            <ListButton className={'rounded-t-lg'} onClick={() => setMain('order-tracking')} name={"پیگیری سفارش"} />
                            <ListButton onClick={() => setMain('basket')} name={"خرید های من"} />
                            <ListButton onClick={() => setMain('favorite')} name={"علاقه مندی ها"} />
                            <ListButton onClick={() => setMain('profile')} name={"پروفایل من"} />
                            <ListButton onClick={() => navigate('/support')} name={"خدمات پس از فروش"} />
                            <ListButton className={'rounded-b-lg hover:bg-red-700'} onClick={useLogOut} name={'خروج از حساب کاربری'} />
                        </ul>
                    </div>
                    {(
                        () => {
                            switch (main) {
                                case 'profile':
                                    return <Profile />
                                case 'favorite':
                                    return <MyFavorite />
                                case 'basket':
                                    return <div className='m-auto'>شما تا کنون خریدی نداشتید</div>
                                case 'order-tracking':
                                    return <div className='m-auto'>شما تا کنون خریدی نداشتید</div>
                                default:
                                    return <Profile />
                            }
                        }
                    )()}
                </div>
            </main>
            <Footer />
        </>
    )
}

