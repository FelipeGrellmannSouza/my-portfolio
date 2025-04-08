import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow'
import { projects } from '@/data/projectsData';
import { useState } from 'react';
import { SwipperComponentDesc } from './SwipperComponentDesc';

export const SwipperComponent = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const toggleDescription = (projectTitle: string) => {
        setSelectedProject(prev => prev === projectTitle ? null : projectTitle);
    };
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
                    el: '.custom-swiper-pagination',
                }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="w-full h-[400px] pb-20 relative"
            >
                {projects.map((project) => {

                    const isSelected = selectedProject === project.title;
                    return (
                        <SwiperSlide key={project.title} className="bg-neutral-950 rounded-xl overflow-hidden shadow-xl max-w-[315px]">
                            <div className="flex flex-col h-full">
                                {!isSelected &&
                                    <div className="h-[100%] overflow-hidden">
                                        <Image
                                            src={project.image}
                                            width={300}
                                            height={300}
                                            alt={project.title + ' print'}
                                            className="w-full h-full object-scale-down"
                                        />
                                    </div>
                                }
                                <h3 className="text-lg font-bold p-4 text-center text-gray-400">
                                    {project.title}
                                </h3>
                                {isSelected &&
                                    <SwipperComponentDesc project={project} />
                                }
                                <div className="flex items-end pb-5">
                                    <button
                                        className="flex justify-center w-[100%] h-[40px] mx-4 bg-amber-700 text-white rounded-xl hover:bg-amber-500 transition"
                                        onClick={() => toggleDescription(project.title)}
                                    >
                                        <Image
                                            src={'/imgs/view.png'}
                                            alt='github icon'
                                            height={40}
                                            width={40}
                                        />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper >
            <div className="custom-swiper-pagination mt-4"></div>
        </>
    )
}
