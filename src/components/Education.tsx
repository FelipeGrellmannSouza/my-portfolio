import React from 'react'
import { EducationCard } from './EducationCard'

export const Education = () => {
    const myEdu = [
        {
            name: 'SENAI/SC',
            local: 'Florianópolis',
            curse: 'Tecnologia da Informação',
            date: '2018-2020',
            img: '/imgs/senai.png',
        },
        {
            name: 'UNICID',
            local: 'São Paulo',
            curse: 'Analise e Desenvolvimento de Sistemas',
            date: '2022-2024',
            img: '/imgs/unicid.jpeg',
        },
        {
            name: 'UNICID',
            local: 'São Paulo',
            curse: 'Sistemas da Informação',
            date: '2014-2026',
            img: '/imgs/unicid.jpeg',
        }
    ]
    return (
        <div className='flex flex-col items-end mt-50' id='education'>
            <h1 className='text-5xl mb-10'>Education</h1>
            <div className='flex flex-col items-end'>
                <EducationCard data={myEdu} />
            </div>
        </div>
    )
}
