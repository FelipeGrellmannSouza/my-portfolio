// import Swiper JS
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'
import { projects } from '@/data/projectsData';
//modules 
export const SwipperComponent = () => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={false}
                coverflowEffect={{
                    rotate: 5,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-swiper-pagination', // Define um seletor personalizado
                }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="w-full h-[400px] pb-20 relative"
            >
                {projects.map((project) => (
                    <SwiperSlide className="bg-neutral-950 rounded-xl overflow-hidden shadow-xl max-w-[315px]">
                        <div className="flex flex-col h-full">
                            <div className="h-[100%] overflow-hidden">
                                <Image
                                    src={project.image}
                                    width={300}
                                    height={300}
                                    alt={project.title + ' print'}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-md font-bold p-4 text-center text-gray-400">{project.title}</h3>
                            {/* <div className='flex justify-center px-[30px]'>
                        <span className='text-neutral-500'>{project.desc}</span>
                    </div> */}
                            <div className="flex justify-evenly items-end pb-5">
                                <button className="px-[15px] py-[5px] bg-neutral-600 rounded-xl hover:bg-neutral-700 transition">
                                    <Image
                                        src={'/imgs/github.png'}
                                        alt='github icon'
                                        height={30}
                                        width={30}
                                    />
                                </button>
                                <button className="px-[15px] py-[5px] bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition">
                                    <Image
                                        src={'/imgs/view.png'}
                                        alt='github icon'
                                        height={30}
                                        width={30}
                                    />
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-swiper-pagination mt-4"></div>
        </>
    )

}
