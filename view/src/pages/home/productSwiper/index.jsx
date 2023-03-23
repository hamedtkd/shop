import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './index.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getProductsServices } from '@/api/services/getProducts';
import { Card, Link, persianNumber } from '@/components';
import { uploadsURL } from '@/api/constant';

export default function ProdctSwiper({ service, title, tag, ...props }) {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getProductsServices({ tag });
                setData(res.data.isProduct);
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();

    }, []);

    return (
        <div className='h-full'>
            <div className=' p-8'>
                <h2 className='text-2xl'>
                    {title}
                </h2>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={25}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                className="my-10 card "

            >

                {data?.map((item) => {
                    return (
                        <SwiperSlide>
                            <Card item={item}/>
                        </SwiperSlide>
                    )
                })
                }

            </Swiper>
        </div>
    );
};