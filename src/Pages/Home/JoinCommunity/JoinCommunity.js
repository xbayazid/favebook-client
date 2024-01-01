import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import CommunityCard from '../../../components/CommunityCard/CommunityCard';

const JoinCommunity = () => {
    const {data: groups = [], isLoading} = useQuery({
        queryKey: ['group'],
        queryFn: async () => {
            const res = await fetch('https://favebook-server-chi.vercel.app/groups/');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='my-6 mx-[7%]'>
            <div className='mb-10'>
                <h1 className='text-xl lg:text-5xl font-medium mb-3'>Join Our book Group</h1>
                <p>Readers wanted! Browse clubs that are open to the public and find the perfect book club for you.</p>
            </div>
            <div className=''>
                
            <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    //   navigation={true}
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
                    modules={[Autoplay]}
                    className="mySwiper"
                >

                    {
                        groups.map(item => <SwiperSlide key={item._id} className='odd:bg-[#FBADAF66] even:bg-[#D2EDF2] rounded-xl'><CommunityCard item={item} /></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default JoinCommunity;