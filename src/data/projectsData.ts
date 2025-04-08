export type Project = {
    title: string;
    desc: string;
    technologies?: string[];
    image: string;
    github: string;
    url?: string;
}

export const projects: Project[] = [
    {
        title: 'Visualização de Acomodações',
        desc: 'Desenvolvimento fullstack de um site para exibição de acomodações, aplicando criação de APIs utilizando Flask, além de páginas responsivas com React e Bootstrap.',
        technologies: ['Python', 'React', 'SQLite', 'Docker'],
        image: '/imgs/acomodacoes.png',
        github: 'https://github.com/FelipeGrellmannSouza'

    },
    {
        title: 'GS PRATAS',
        desc: 'Landing Page para uma revendedora de pratas responsiva, utilizando HTML e CSS.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: '/imgs/gs_pratas.png',
        github: 'https://github.com/FelipeGrellmannSouza/GS_PRATAS',
        url: 'https://felipegrellmannsouza.github.io/GS_PRATAS/'
    },
    {
        title: 'PetDevShop',
        desc: 'Aplicação web responsiva para mostrar animais disponiveis em uma petshop, utilizando node.js com Typescript e mustache',
        technologies: ['TypeScript', 'CSS', 'Mustache'],
        image: '/imgs/petdevshop.png',
        github: 'https://github.com/FelipeGrellmannSouza/nodets-canil'
    },
    {
        title: 'API de authenticação OTP',
        desc: 'API backend em Node.js para autenticação via OTP. Permite cadastro, login com envio de código por e-mail, validação do código para geração de JWT e acesso a rotas privadas.',
        technologies: ['Node.js', 'PostgreSQL', 'Express'],
        image: '/imgs/api.png',
        github: 'https://github.com/FelipeGrellmannSouza'

    },
    {
        title: 'Controle de Presença',
        desc: 'Aplicativo android para cadastro e controle de presença de alunos, com geração e validação de Qr code e captura de fotos para confirmação.',
        technologies: ['Java', 'Firebase'],
        image: '/imgs/controle-presenca.png',
        github: 'https://github.com/FelipeGrellmannSouza'
    },
    {
        title: 'Working in Progress',
        desc: 'Working in progress',
        image: '/imgs/coming-soon.png',
        github: 'https://github.com/FelipeGrellmannSouza',
        url: 'https://www.google.com',
    }
]