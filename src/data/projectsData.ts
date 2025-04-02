import { title } from "process";

type Project = {
    title: string;
    desc: string;
    technologies: string;
    image: string;
    active: boolean;
}

export const projects: Project[] = [
    {
        title: 'Visualização de Acomodações',
        desc: 'Desenvolvimento fullstack de um site para exibição de acomodações, aplicando criação de APIs utilizando Flask, além de páginas responsivas com React e Bootstrap.',
        technologies: 'Python, React, SQLite, Docker',
        image: '/imgs/acomodacoes.png',
        active: false
    },
    {
        title: 'API de authenticação OTP',
        desc: 'API backend em Node.js para autenticação via OTP. Permite cadastro, login com envio de código por e-mail, validação do código para geração de JWT e acesso a rotas privadas.',
        technologies: 'Node.js, TypeScript, PostgreSQL, Prisma, Express, JWT, Mailtrap.',
        image: '/imgs/otp.png',
        active: false
    },
    {
        title: 'Controle de Presença',
        desc: 'Aplicativo para cadastro e controle de presença de alunos, com geração e validação de Qr code e captura de fotos para confirmação.',
        technologies: 'Java, Firebase.',
        image: '/imgs/controle-presenca.png',
        active: false
    },
    {
        title: 'Working in Progress',
        desc: 'Working in progress',
        technologies: 'Nothing',
        image: '/imgs/coming-soon.png',
        active: false
    }
]