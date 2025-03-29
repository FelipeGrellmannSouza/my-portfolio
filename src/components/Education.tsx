import React from 'react'
import { EducationCard } from './EducationCard'
import { myEdu } from '@/data/educationData'

export const Education = () => {

    return (
        <div className='flex flex-col items-center' id='education'>
            <h1 className='text-5xl mb-10'>Education</h1>
            <div className='flex flex-col items-end'>
                <EducationCard data={myEdu} />
            </div>
        </div>
    )
}
