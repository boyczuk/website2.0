import './Home.css';
import meImage from '../assets/image.png';
import { SetStateAction, useState } from 'react';
import { FaLinkedin, FaGithub, FaFistRaised, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import tangleChatImg from '../assets/project_covers/tanglechat.jpg';
import arcadeRateImg from '../assets/project_covers/arcaderate.jpg';
import blackMarketImg from '../assets/project_covers/blackmarket.jpg';
import yasuImg from '../assets/project_covers/yasu.jpg';
import proximaImg from '../assets/project_covers/proxima.jpg';
import flappyBirdImg from '../assets/project_covers/flappybird.jpg';
import quantImg from '../assets/project_covers/quant.jpg';
import qbnbImg from '../assets/project_covers/qbnb.jpg';
import uavImg from '../assets/project_covers/UAV.jpg';

import ProximaCommandLogo from '../assets/ProximaCommandLogo.jpg';
import theWorldofYasuLogo from '../assets/the_world_of_yasu_logo.jpg';
import QueensLogo from '../assets/QueensLogo.jpg';

type Project = {
    id: number;
    name: string;
    desc: string;
    skills: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    { id: 1, name: "Tangle-chat", desc: "A decentralized chat app.", skills: "Javascript, Go, React, PostgreSQL, AWS EC2, Docker", image: tangleChatImg, link: "https://github.com/boyczuk/GoChat" },
    { id: 2, name: "Arcade-Rate", desc: "A game rating platform.", skills: "TypeScript, Node.js, React, Firebase", image: arcadeRateImg, link: "https://github.com/boyczuk/web-arcade-rate" },
    { id: 3, name: "Black Market - Unity game", desc: "A 2D crime game.", skills: "C#, Unity, 2D Game Development", image: blackMarketImg, link: "https://github.com/boyczuk/BlackMarket2D" },
    { id: 4, name: "The World of Yasu", desc: "An online world exploration game.", skills: "TypeScript, React, Firebase, TailwindCSS", image: yasuImg, link: "https://theworldofyasu.com/explore-world" },
    { id: 5, name: "Proxima Command", desc: "An Arduino-based space command project.", skills: "Python, Pygame, CircuitPython, Arduino", image: proximaImg, link: "https://proximacommand.com/" },
    { id: 6, name: "Flappy Bird Reinforcement Learning", desc: "AI plays Flappy Bird using RL.", skills: "Python, PyTorch, OpenAI Gym, NumPy, Pandas", image: flappyBirdImg, link: "https://github.com/boyczuk/FlappyBird-ReinforcementLearning" },
    { id: 7, name: "Equities Trading Bot", desc: "Automated trading bot.", skills: "Python, QuantConnect, Jupyter Notebook, NumPy, Pandas, Scikit-learn", image: quantImg, link: "https://github.com/boyczuk" },
    { id: 8, name: "QBNB - Airbnb Clone", desc: "A clone of Airbnb.", skills: "Python, Flask, MongoDB, Pytest, Linux, Docker", image: qbnbImg, link: "https://github.com/mad-cat-lon/qbnb" },
    { id: 9, name: "UAV Detection", desc: "Machine Learning model for UAV detection.", skills: "Python, YOLOv5, OpenCV", image: uavImg, link: "https://l1nna.com/" }
];


function HomePage() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <div className='main-page'>
            <div id='intro' className='intro'>
                <div className='big-intro-text'>
                    Hi! I’m <span className='highlight'>Adlai Bridson-Boyczuk</span>,<br></br>
                    a software developer and Computer Science graduate from Queen’s University.
                    <div className='small-intro-text'>

                        I love building things! Professionally, I’ve developed web apps and software using TypeScript, Python, React, and Firebase,
                        while in my free time I’m currently focused on learning Go and strengthening my knowledge of Java.
                    </div>
                </div>


                <div className='intro-image'>
                    <img src={meImage}></img>
                    <div className='icons'>
                        <li><FaGithub onClick={() => window.open('https://github.com/boyczuk', '_blank')} /></li>
                        <li><FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/adlai-bridson-boyczuk/', '_blank')} /></li>
                        <li><FaFistRaised onClick={() => window.open('https://smoothcomp.com/en/profile/1073699', '_blank')} /></li>
                    </div>
                </div>

            </div>

            <div className="scroll-arrow" onClick={() => scrollToSection('projects')}>
                ↓
            </div>

            <div id='projects' className='projects'>
                <h1>Projects</h1>
                <div className='project-container'>
                    {projects.map((project) => (
                        <div className='project-box' onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}>
                            <img className='project-cover' src={project.image} alt={project.name}></img>
                            <p>{project.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="experience" className="experience">
                <h1>Experience</h1>

                <div className="experience-entry">
                    <img src={ProximaCommandLogo} alt="Proxima Command" className="experience-logo" />
                    <div className="experience-details">
                        <h2>Software Developer · Proxima Command</h2>
                        <div className="experience-time">July 2024 – Oct 2024</div>
                        <p>
                            Developed Python software for an 8-player arcade starship simulator, integrating physical controls via Arduino and PySerial. Optimized input processing, reducing latency by 30ms, and implemented a multithreading system to enhance system responsiveness.
                        </p>
                        <div className="experience-skills">
                            <span>Python</span>
                            <span>Pygame</span>
                            <span>Arduino</span>
                            <span>Multithreading</span>
                            <span>Concurrency</span>
                            <span>Asyncio</span>
                        </div>
                    </div>
                </div>

                <div className="experience-entry">
                    <img src={theWorldofYasuLogo} alt="World of Yasu" className="experience-logo" />
                    <div className="experience-details">
                        <h2>Junior Developer · The World of Yasu</h2>
                        <div className="experience-time">May 2023 – Jan 2024</div>
                        <p>
                            Built a custom animated web app for a startup using TypeScript and React, reducing bounce rates by 30%. Improved performance through CDN asset hosting and ensured full mobile compatibility using Tailwind CSS.
                        </p>
                        <div className="experience-skills">
                            <span>TypeScript</span>
                            <span>React</span>
                            <span>Tailwind CSS</span>
                            <span>Firebase</span>
                            <span>CI/CD</span>
                            <span>UI/UX</span>
                        </div>
                    </div>
                </div>

                <div className="experience-entry">
                    <img src={QueensLogo} alt="Queen's University" className="experience-logo" />
                    <div className="experience-details">
                        <h2>Computer Science · Queen's University</h2>
                        <div className="experience-time">Sept 2020 – April 2024</div>
                        <p>
                            Earned a Bachelor of Computing with a 3.7 GPA, specializing in Artificial Intelligence. My capstone project was focused on drone detection using Machine Learning
                            (YOLOv5 and OpenCV).<br></br> Dean’s Honour List (2022, 2023, 2024).
                        </p>
                        <div className="experience-skills">
                            <span>Python</span>
                            <span>Java</span>
                            <span>C#</span>
                            <span>C</span>
                            <span>SQL</span>
                            <span>PHP</span>
                            <span>Bash Scripting</span>
                            <span>Unity</span>
                            <span>Assembly</span>
                            <span>Functional Programming</span>
                            <span>Computer Vision</span>
                            <span>Deep Learning</span>
                            <span>Reinforcement Learning</span>
                        </div>
                    </div>
                </div>
            </div>




            {/*<div className='skills'>
                <h1>Skills</h1>
            </div>*/}
        </div>
    )
}

export default HomePage;