import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fetchCommentServices } from '@/api/services/comment';
import { useParams } from 'react-router-dom';
import { Avatar, Rating } from 'flowbite-react';
import uuid from 'react-uuid';


export function PeopleComments() {
    const [data, setData] = useState([]);
    const { productId } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchCommentServices(productId);
                setData(res.data.data[0]);
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();

    }, []);
    let items =[]
    const handleRating = (star) => {
        items = []
        for (let i = 1; i <= star; i++) {
            items.push(<span >  <Rating.Star /></span>)
        }
        for (let i = 1; i <= 5-star; i++) {
            items.push(<span key={uuid()}>  <Rating.Star filled={false} /></span>)
        }
        
        return (
            <Rating className="cursor-pointer">
                {items}
            
            </Rating>
        ) 
    }

    return (
        <>
            {data.length ?
                <div>
                    <div className=' p-8'>
                        <h2 className='text-2xl'>
                            نظرات دیگران
                        </h2>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={25}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className="my-10 card"

                    >
                        {data?.map((item) => {
        
                           
                            return (
                                <SwiperSlide>

                                    <SwiperSlide>

                                        <div className="bg-gray-700 text-white p-5 rounded-lg h-3/4 ">
                                            <div className="flex items-center gap-6">
                                                <div className="bg-yellow-300  rounded-full">
                                                    <Avatar
                                                        size="lg"
                                                        img={item.picture}
                                                        rounded={true} />
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <p className="text-2xl">{item.userName}</p>
                                                    {item.star? handleRating(item.star):<div></div>}
 
                                                    <span className='text-xs font-thin text-gray-400'>{item.jalaliDate}</span>

                                                </div>
                                            </div>
                                            <div className="py-5 rounded-lg h-2/4 overflow-y-auto">
                                                <p className="overflow-y-auto ">{item.comment}
                                                </p>
                                            </div>
                                        </div>

                                    </SwiperSlide>

                                </SwiperSlide>
                            )
                        })
                        }

                    </Swiper>
                </div>
                :
                <div>
                </div>
            }

        </>

    );
};