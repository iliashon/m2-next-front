"use client";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import slider style
import "./Slider.css";

// import photo for slider
import slide_1 from "@/assets/images/slide1.jpeg";
import slide_2 from "@/assets/images/slide2.jpeg";
import slide_3 from "@/assets/images/slide3.jpeg";

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={slide_1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={slide_3} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
