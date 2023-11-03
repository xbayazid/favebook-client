import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import BannerCard from './BannerCard';

const Banner = () => {
    const bannerItems = [
        {
            id: 1,
            img: 'https://i.ibb.co/j3XpKhP/hero-1.png',
            name: 'The Last House on Needless Street',
            author: 'Catriona Ward'
        },
        {
            id: 2,
            img: 'https://i.ibb.co/LJF3nDw/hero-2.png',
            name: 'The Midnight Library',
            author: 'Catriona Ward'
        },
        {
            id: 3,
            img: 'https://i.ibb.co/FWqbMYJ/hero-3.png',
            name: 'The Invisible Life of Addie LaRue',
            author: 'Catriona Ward'
        },
        {
            id: 4,
            img: 'https://i.ibb.co/0QjjBpH/book-1.png',
            name: 'Where the Crawdads Sing',
            author: 'Catriona Ward'
        },
        {
            id: 5,
            img: 'https://i.ibb.co/XtT5y3j/book-3.png',
            name: 'Project Hail Mary',
            author: 'Catriona Ward'
        },
    ]
    return (
        <div className='mx-[7%] relative mb-24'>
            <div className='h-[60vh] bg-[#D0ECF1]' >
            </div>
            <div className='h-[600px] px-10 w-full top-16 left-0 absolute'>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      navigation={true}
                      loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >

                    {
                        bannerItems.map(item => <SwiperSlide key={item.id}><BannerCard item={item} /></SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Banner;