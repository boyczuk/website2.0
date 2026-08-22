import tangleChatImg from '../assets/project_covers/tanglechat.jpg';
import blackMarketImg from '../assets/project_covers/blackmarket.jpg';
import yasuImg from '../assets/project_covers/yasu.jpg';
import proximaImg from '../assets/project_covers/proxima.jpg';
import uavImg from '../assets/project_covers/UAV.jpg';

import ClutchLogo from '../assets/ClutchLogo.png';
import Phase5Logo from '../assets/Phase5Logo.png';
import ProximaCommandLogo from '../assets/ProximaCommandLogo.jpg';
import theWorldofYasuLogo from '../assets/the_world_of_yasu_logo.jpg';
import QueensLogo from '../assets/QueensLogo.jpg';
import meImage from '../assets/image.png';

export type Project = {
    id: number;
    name: string;
    desc: string;
    skills: string[];
    image: string;
    link: string;
};

export const projects: Project[] = [
    {
        id: 1,
        name: 'Tangle-chat',
        desc: "Built a real-time messaging web app that I can slowly expand into a full social media platform. Currently the main functional feature is real time messaging, and messaging persistence. Currently in the process of implementing security precautions and adding a posting system.",
        skills: ['JavaScript', 'Go', 'React', 'PostgreSQL', 'AWS EC2', 'Docker'],
        image: tangleChatImg,
        link: 'http://tangle-chat.com/',
    },
    {
        id: 2,
        name: 'Black Market',
        desc: 'Top down 2D strategy crime game coded in Unity2D. Think Rimworld but for organized crime. In this game you create, hire and organize your new organized crime group/mafia/cartel and fight for territory in the city of Senago. Implemented modern A* pathfinding algorithms to ensure responsive and intelligent NPCs.',
        skills: ['C#', 'Unity', '2D Game Development'],
        image: blackMarketImg,
        link: '',
    },
    {
        id: 3,
        name: 'The World of Yasu',
        desc: 'Developed a custom site for a healthy energy drink startup with the target audience being neurodivergent gamers. Helped design the site alongside graphic designers and other artists.',
        skills: ['TypeScript', 'React', 'Firebase', 'TailwindCSS', 'Figma'],
        image: yasuImg,
        link: 'https://theworldofyasu.com/explore-world',
    },
    {
        id: 4,
        name: 'Proxima Command',
        desc: "Wrote the software behind Proxima Command's Starship Simulator in person escape room. Two teams of 8 players face off using physical consoles controlled using Arduinos and my software.",
        skills: ['Python', 'Pygame', 'CircuitPython', 'Arduino'],
        image: proximaImg,
        link: 'https://proximacommand.com/',
    },
    {
        id: 5,
        name: 'UAV Detection',
        desc: 'Machine Learning model for detecting UAVs versus other aerial objects in a stochastic environment. Collected 14,000+ images, and 650 videos from open sourced annotated datasets to use as training data.',
        skills: ['Python', 'YOLOv5', 'OpenCV'],
        image: uavImg,
        link: 'https://l1nna.com/',
    },
];

export type ExperienceEntry = {
    id: number;
    org: string;
    role: string;
    time: string;
    desc: string;
    skills: string[];
    logo: string;
};

export const experience: ExperienceEntry[] = [
    {
        id: 1,
        org: 'Clutch',
        role: 'Software Engineer',
        time: 'May 2025 – Present',
        desc: '',
        skills: [],
        logo: ClutchLogo,
    },
    {
        id: 2,
        org: 'Phase 5',
        role: 'Software Developer (Contract)',
        time: 'April 2025 – May 2025',
        desc: 'Programmed a Python-based automation tool to generate presentations based on market research reports.',
        skills: ['Python', 'Pandas', 'NumPy', 'win32com', 'Excel'],
        logo: Phase5Logo,
    },
    {
        id: 3,
        org: 'Proxima Command',
        role: 'Software Developer',
        time: 'July 2024 – Oct 2024',
        desc: 'Developed Python software for an 8-player arcade starship simulator, integrating physical controls via Arduino and PySerial. Optimized input processing, reducing latency by 30ms, and implemented a multithreading system to enhance system responsiveness.',
        skills: ['Python', 'Pygame', 'Arduino', 'Multithreading', 'Concurrency', 'Asyncio'],
        logo: ProximaCommandLogo,
    },
    {
        id: 4,
        org: 'The World of Yasu',
        role: 'Junior Developer',
        time: 'May 2023 – Jan 2024',
        desc: 'Built a custom animated web app for a startup using TypeScript and React, reducing bounce rates by 30%. Improved performance through CDN asset hosting and ensured full mobile compatibility using Tailwind CSS.',
        skills: ['TypeScript', 'React', 'Tailwind CSS', 'Firebase', 'CI/CD', 'UI/UX'],
        logo: theWorldofYasuLogo,
    },
    {
        id: 5,
        org: "Queen's University",
        role: 'Computer Science',
        time: 'Sept 2020 – April 2024',
        desc: "Earned a Bachelor of Computing with a 3.7 GPA, specializing in Artificial Intelligence. My capstone project was focused on drone detection using Machine Learning (YOLOv5 and OpenCV). Dean's Honour List (2022, 2023, 2024).",
        skills: ['Python', 'Java', 'C#', 'C', 'SQL', 'PHP', 'Bash Scripting', 'Unity', 'Assembly', 'Functional Programming', 'Computer Vision', 'Deep Learning', 'Reinforcement Learning'],
        logo: QueensLogo,
    },
];

export const profile = {
    name: 'Adlai Bridson-Boyczuk',
    firstName: 'Adlai',
    role: 'Software Developer',
    location: 'Toronto, Ontario',
    blurb: "I love building things! Professionally, I've developed web apps and software using TypeScript, Python, React, PostgreSQL, AWS, and Firebase. Currently, I'm focused on becoming a TypeScript menace.",
    photo: meImage,
    email: 'adlaibb@gmail.com',
    resumeUrl: '/Adlai_Resume_07_2026.pdf',
    socials: {
        github: 'https://github.com/boyczuk',
        linkedin: 'https://www.linkedin.com/in/adlai-bridson-boyczuk/',
        instagram: 'https://www.instagram.com/boyczuk/',
        judo: 'https://smoothcomp.com/en/profile/1073699',
    },
};
