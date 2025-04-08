import { Project } from '@/data/projectsData'
import Image from 'next/image'

type Props = {
    project: Project;
}

export const SwipperComponentDesc = ({ project }: Props) => {
    return (

        <div className='flex flex-col h-[100%] justify-evenly'>
            <div className='px-4 min-h-[60%] w-[100%]'>
                <span className='text-neutral-500'>{project.desc}</span>
            </div>
            <div className='flex h-10 px-[30px] justify-center text-sm text-black'>
                {project.technologies &&
                    project.technologies.map((tech) => (
                        <div
                            key={tech}
                            className='flex items-center p-[3px] m-[3px] bg-neutral-300 rounded-xl hover:bg-amber-700'
                        >
                            {tech}
                        </div>
                    ))
                }
            </div>
            <div className='flex mx-4'>
                <a
                    className="flex justify-center px-[15px] py-[5px] w-[100%] bg-neutral-400 rounded-xl hover:bg-neutral-700 transition"
                    href={project.github}
                    target='_blank'
                >
                    <Image
                        src={'/imgs/github.png'}
                        alt='github icon'
                        height={30}
                        width={30}
                    />
                </a>
                {project.url ?
                    <a
                        className="flex justify-center px-[15px] py-[5px] ml-1 w-[100%] bg-neutral-400 rounded-xl hover:bg-neutral-700 transition hover:cursor-pointer"
                        href={project.url}
                        target='_blank'
                    >
                        <Image
                            src={'/imgs/website.png'}
                            alt='github icon'
                            height={30}
                            width={30}
                        />
                    </a>
                    :
                    <button
                        className="flex justify-center px-[15px] py-[5px] ml-1 w-[100%] rounded-xl bg-neutral-700 transition text-black hover:cursor-not-allowed"
                    >
                        <Image
                            src={'/imgs/website.png'}
                            alt='github icon'
                            height={30}
                            width={30}
                        />
                    </button>
                }
            </div>


        </div>

    )
}
