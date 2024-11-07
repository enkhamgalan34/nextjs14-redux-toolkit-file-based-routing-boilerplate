"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useGetMain } from "@/api";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MainBanner() {
    const { data, isLoading, isError } = useGetMain();
    console.log("data", data);

    return (
        <div className="w-full m-auto h-[500px] pb-20">
            <Swiper
                centeredSlides={true}
                loop={true}
                // effect="coverflow"
                // grabCursor={true}
                // slidesPerView="1.2"
                // coverflowEffect={{
                //     rotate: 20,
                //     stretch: 10,
                //     depth: 100,
                //     modifier: 1,
                // }}
                // breakpoints={{
                //     575: {
                //         slidesPerView: 2,
                //     },
                // }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {data?.banners.map((banner, i) => (
                    <SwiperSlide key={i} className="overflow-hidden relative">
                        <div className="w-full h-full">
                            <img
                                src={
                                    banner.pcImageAtch[0]?.url
                                        ? process.env.SERVER_URL +
                                          banner?.pcImageAtch[0]?.url
                                        : "dd"
                                }
                                alt={banner.mainText}
                            />
                        </div>
                        <div className="absolute top-1/2 left-1/2 text-black font-bold text-xl">
                            <h3>{banner.mainText}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
