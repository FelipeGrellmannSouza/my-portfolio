import Image from 'next/image'
import React from 'react'

type EducationItem = {
    name: string;
    local: string;
    curse: string;
    date: string;
    img: string;
}

type Props = {
    data: EducationItem[];
}

export const EducationCard = ({ data }: Props) => {
    return (
        <>
            {data.map(course =>
                <div key={course.curse}
                    className='
                        flex items-center justify-between 
                        mb-5 px-5 py-5 
                        w-full min-h-30 max-h-50
                        rounded-md 
                        bg-white/5 text-white
                        transition-all duration-300 
                        hover:bg-white/20 hover:scale-[1.03]
                    '
                >
                    <div className='flex-1 text-xs sm:text-sm md:text-lg'>
                        <h3 className='mr-[20px] sm:text-xl sm:mr-5 md:text-2xl'>{course.curse}</h3>
                        <div className=''>{course.name}</div>
                        <div>{course.local}</div>
                        <div>{course.date}</div>
                    </div>
                    <div>
                        <Image
                            src={course.img}
                            width={100}
                            height={100}
                            alt='logo da faculdade'
                            className='rounded-md h-[80px] w-[80px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] object-contain'
                        />
                    </div>
                </div>
            )}
        </>
    );
}
