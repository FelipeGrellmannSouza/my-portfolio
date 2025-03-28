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
            {data.map(curse =>
                <div key={curse.curse} className='flex items-center mb-5 p-4 w-130 rounded-md bg-amber-700/55 text-white'>
                    <div className='flex-1'>
                        <h3 className='text-3xl'>{curse.name}</h3>
                        <div>{curse.curse}</div>
                        <div>{curse.local}</div>
                        <div>{curse.date}</div>
                    </div>
                    <div>
                        <Image
                            src={curse.img}
                            width={100}
                            height={0}
                            alt='logo da faculdade'
                            className='flex-2 rounded-md'
                        />
                    </div>
                </div>
            )}


        </>
    );
}
