import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { sliderServices } from "@/api/services/slider";
import { toast } from "react-toastify";

export default function SliderComponent() {
    const [data, setData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await sliderServices();
                console.log(res.data);
                setData(res.data.data);
            } catch (ex) {
                toast.error(ex?.response?.data?.message);
            }
        };
        fetchData();

    }, []);
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data?.map((i) => {
                    <SwiperSlide  key={i.id}>
                        <Link to={i._id}>
                            <img
                                className="object-fill w-full h-96"
                                src={i?.picture}
                                alt={i?.desc}
                            />
                        </Link>
                    </SwiperSlide>
                })}
                <SwiperSlide>
                    <Link to="">

                        <img
                            className="object-center w-full h-96"
                            src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1704&q=80"
                            alt="image slide 2"
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="">

                        <img
                            className="object-center w-full h-96"
                            src="https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                            alt="image slide 3"
                        />
                    </Link>
                   
                </SwiperSlide> 
                <SwiperSlide>
                    <Link to="">

                        <img
                            className="object-center w-full h-96"
                            src=" https://images.unsplash.com/photo-1611253468190-816d8472c5ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                            alt="image slide 2"
                        />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
}