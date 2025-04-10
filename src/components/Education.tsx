import { EducationCard } from './EducationCard'
import { myEdu } from '@/data/educationData'

export const Education = () => {

    return (
        <div className='flex flex-col items-center p-[10px] lg:w-[50%]' id='graduações'>
            <h1 className='text-5xl mb-10'>Graduações</h1>
            <div className='flex flex-col items-end'>
                <EducationCard data={myEdu} />
            </div>
        </div>
    )
}
