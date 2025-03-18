import './Home.css';
import meImage from '../assets/image.png';
import { SetStateAction, useState } from 'react';
import { FaLinkedin, FaGithub, FaFistRaised } from 'react-icons/fa';
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
    { id: 1, name: "Tangle-chat", desc: "Une application de chat décentralisée.", skills: "Javascript, Go, React, PostgreSQL, AWS EC2, Docker", image: tangleChatImg, link: "https://github.com/boyczuk/GoChat" },
    { id: 2, name: "Arcade-Rate", desc: "Une plateforme de notation de jeux vidéo.", skills: "TypeScript, Node.js, React, Firebase", image: arcadeRateImg, link: "https://github.com/boyczuk/web-arcade-rate" },
    { id: 3, name: "Black Market - Jeu Unity", desc: "Un jeu 2D sur le crime.", skills: "C#, Unity, Développement de jeux 2D", image: blackMarketImg, link: "https://github.com/boyczuk/BlackMarket2D" },
    { id: 4, name: "The World of Yasu", desc: "Un jeu d'exploration en ligne.", skills: "TypeScript, React, Firebase, TailwindCSS", image: yasuImg, link: "https://theworldofyasu.com/explore-world" },
    { id: 5, name: "Proxima Command", desc: "Un simulateur de vaisseau spatial conçu avec Arduino.", skills: "Python, Pygame, CircuitPython, Arduino", image: proximaImg, link: "https://proximacommand.com/" },
    { id: 6, name: "Flappy Bird Reinforcement Learning", desc: "Un modèle d'IA joue à Flappy Bird en utilisant l'apprentissage par renforcement.", skills: "Python, PyTorch, OpenAI Gym, NumPy, Pandas", image: flappyBirdImg, link: "https://github.com/boyczuk/FlappyBird-ReinforcementLearning" },
    { id: 7, name: "Bot de Trading en Bourse", desc: "Un bot de trading automatisé.", skills: "Python, QuantConnect, Jupyter Notebook, NumPy, Pandas, Scikit-learn", image: quantImg, link: "https://github.com/boyczuk" },
    { id: 8, name: "QBNB - Clone d'Airbnb", desc: "Un clone d'Airbnb.", skills: "Python, Flask, MongoDB, Pytest, Linux, Docker", image: qbnbImg, link: "https://github.com/mad-cat-lon/qbnb" },
    { id: 9, name: "Détection UAV", desc: "Un modèle de Machine Learning pour la détection des drones.", skills: "Python, YOLOv5, OpenCV", image: uavImg, link: "https://l1nna.com/" }
];

function FrenchHomePage() {
    return (
        <div className='main-page'>
            <div id='intro' className='intro'>
                <div className='big-intro-text'>
                    Salut ! Je suis <span className='highlight'>Adlai Bridson-Boyczuk</span>,<br></br>
                    développeur logiciel et diplômé en informatique de l'Université Queen’s.
                    <div className='small-intro-text'>
                        J'adore créer des choses ! Professionnellement, j’ai développé des applications web avec TypeScript, React et Firebase.
                        Actuellement, j’apprends Go et j'approfondis mes connaissances en Java.
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

            <div id='projects' className='projects'>
                <h1>Projets</h1>
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
                <h1>Expérience</h1>

                <div className="experience-entry">
                    <img src={ProximaCommandLogo} alt="Proxima Command" className="experience-logo" />
                    <div className="experience-details">
                        <h2>Développeur Logiciel · Proxima Command</h2>
                        <div className="experience-time">Juillet 2024 – Oct 2024</div>
                        <p>
                            Développement d’un simulateur de vaisseau spatial en Python pour une arcade à 8 joueurs, en intégrant des contrôles physiques via Arduino et PySerial. Optimisation du traitement des entrées et réduction de la latence de 30 ms grâce à un système multithread.
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
                        <h2>Développeur Junior · The World of Yasu</h2>
                        <div className="experience-time">Mai 2023 – Jan 2024</div>
                        <p>
                            Développé une application web interactive pour une startup en énergie avec TypeScript et React, réduisant le taux de rebond de 30%.
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
                    <img src={QueensLogo} alt="Université Queen’s" className="experience-logo" />
                    <div className="experience-details">
                        <h2>Informatique · Université Queen’s</h2>
                        <div className="experience-time">Sept 2020 – Avril 2024</div>
                        <p>
                            Diplôme en informatique avec une moyenne de 3.7 GPA, spécialisé en Intelligence Artificielle. Mon projet de fin d’études était axé sur la détection de drones avec Machine Learning (YOLOv5 et OpenCV).<br></br> Liste d'honneur du Doyen (2022, 2023, 2024).
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
                            <span>Programmation Fonctionnelle</span>
                            <span>Vision par Ordinateur</span>
                            <span>Apprentissage Profond</span>
                            <span>Apprentissage par Renforcement</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrenchHomePage;
