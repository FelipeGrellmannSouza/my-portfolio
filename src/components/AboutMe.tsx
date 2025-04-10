import React from 'react'
import Image from "next/image";

export const AboutMe = () => {
    return (
        <div className="container mx-auto flex flex-col justify-between items-center mt-10">
            <h2 className="text-5xl mb-10" id='sobre'>
                Sobre
            </h2>
            <div className='
                flex flex-col items-center mx-[5%] justify-between
                sm:flex-row-reverse sm:w-full sm:container sm:px-[20px] sm:justify-between
                md:justify-center 
            '>
                <Image
                    src="/imgs/felipe3.jpg"
                    alt="Minha Foto"
                    width={250}
                    height={250}
                    className="h-50 w-50 mb-5 rounded-[30px] drop-shadow-[0_0_6px_rgba(217,119,6,0.7)] 
                    transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(217,119,6)] hover:scale-[1.04]"
                />
                <p className='text-sm sm:text-md sm:max-w-[500] md:mr-10'>
                    Sou um estudante de Sistemas da informação com formação técnica em TI e graduado em Analise
                    Desenvolvimento de Sistemas. Sou dedicado, tenho facilidade de aprendizado e de
                    adaptação. Sempre busco estar em constante aprimoramento através de cursos e estudos,
                    possuo conhecimentos em React, Typescript, Java, Python, HTML e CSS, entre outras
                    tecnologias. Estou em busca de uma oportunidade de estágio para aplicar e expandir minhas
                    habilidades, contribuindo de forma proativa para a empresa e para meu desenvolvimento
                    profissional.
                </p>
            </div>

        </div>
    )
}
