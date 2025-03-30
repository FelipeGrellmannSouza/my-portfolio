export type Certificate = {
    name: string;
    icon: string;
    image?: string;
    complete: boolean;
}
export const certificates: Certificate[] = [
    {
        name: 'HTML/CSS',
        icon: '/imgs/html5-css3.jpg',
        image: 'https://alunos.b7web.com.br/media/certificates/certificado_2900085.jpg',
        complete: true

    },
    {
        name: 'Javascript',
        icon: '/imgs/javascript.jpg',
        complete: true,
        image: 'https://alunos.b7web.com.br/media/certificates/certificado_2320095.jpg'
    },
    {
        name: 'typescript',
        icon: '/imgs/typescript.jpg',
        complete: true,
        image: 'https://alunos.b7web.com.br/media/certificates/certificado_5154412.jpg'
    },
    {
        name: 'git',
        icon: '/imgs/git.jpg',
        complete: true,
        image: 'https://alunos.b7web.com.br/media/certificates/certificado_850464.jpg'
    },
    {
        name: 'Node.js',
        icon: '/imgs/nodejs.jpg',
        complete: false
    },

    {
        name: 'React.js',
        icon: '/imgs/reactjs.jpg',
        complete: false
    },
    {
        name: 'Next.js',
        icon: '/imgs/nextjs.jpg',
        complete: false
    },
    {
        name: 'Python',
        icon: '/imgs/python.png',
        complete: false
    },
    {
        name: 'Java',
        icon: '/imgs/java.png',
        complete: false
    },
    {
        name: 'Tailwind',
        icon: '/imgs/tailwindcss.jpg',
        complete: false
    }
]