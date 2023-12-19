"use client";

import { TSimpleProduct } from "@/magento/Types/TSimpleProduct";
import Badges from "@/magento/components/Badges/Badges";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

export default function ProductGallery({ data }: { data: TSimpleProduct }) {
    return (
        <div className="w-2/5 flex justify-center items-center h-28rem bg-white rounded-xl relative">
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
                {data.media_gallery.map((img) => {
                    return (
                        <SwiperSlide key={img.label}>
                            <Image
                                src={img.url}
                                alt=""
                                width={200}
                                height={200}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Badges newAtr={data.new} saleAtr={data.sale} />
        </div>
    );
}
