import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { fetchCommentServices } from '@/api/services/comment';
import { useParams } from 'react-router-dom';


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
    
    return (
        <>
        {data.length? 
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
                                            <div className="bg-yellow-300 p-5 rounded-full">
                                                {item.picture ? item.picture :
                                                    <svg width="57" height="60" viewBox="0 0 57 60" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M28.5 26.935C19.5642 26.935 17.7535 14.1548 17.7535 14.1548C16.6906 7.50464 19.9185 0 28.3819 0C36.8847 0 40.1126 7.50464 39.0497 14.1548C39.0497 14.1548 37.4358 26.935 28.5 26.935ZM28.5 36.483L39.2072 29.7214C48.6153 29.7214 57 38.3777 57 46.5511V55.8019C57 55.8019 42.6319 60 28.5 60C14.1319 60 0 55.8019 0 55.8019V46.5511C0 38.192 7.63674 29.9071 17.596 29.9071L28.5 36.483Z"
                                                            fill="#070B45" />
                                                    </svg>
                                                }

                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-xl">{item.userName}</p>
                                                {/* <svg width="86" height="17" viewBox="0 0 86 17" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path
d="M60.5 0L57.8726 5.59786L52 6.49036L56.25 10.8496L55.2452 17L60.5 14.0979L65.7548 17L64.75 10.8496L69 6.49643L63.1274 5.59786L60.5 0Z"
fill="#FFC107" />
<path
d="M77.5 0L74.8726 5.59786L69 6.49036L73.25 10.8496L72.2452 17L77.5 14.0979L82.7548 17L81.75 10.8496L86 6.49643L80.1274 5.59786L77.5 0Z"
fill="#FFC107" />
<path
d="M43.5 0L40.8726 5.59786L35 6.49036L39.25 10.8496L38.2452 17L43.5 14.0979L48.7548 17L47.75 10.8496L52 6.49643L46.1274 5.59786L43.5 0Z"
fill="#FFC107" />
<path
d="M26.5 0L23.8726 5.59786L18 6.49036L22.25 10.8496L21.2452 17L26.5 14.0979L31.7548 17L30.75 10.8496L35 6.49643L29.1274 5.59786L26.5 0Z"
fill="#FFC107" />
<path
d="M8.5 0L5.87262 5.59786L0 6.49036L4.25 10.8496L3.24524 17L8.5 14.0979L13.7548 17L12.75 10.8496L17 6.49643L11.1274 5.59786L8.5 0Z"
fill="#C4C4C4" fill-opacity="0.71" />
</svg> */}

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