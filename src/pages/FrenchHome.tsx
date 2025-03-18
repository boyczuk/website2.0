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
}

const projects: Project[] = [
    { id: 1, name: "Tangle-chat", desc: "Une application de messagerie décentralisée.", skills: "Javascript, Go, React, PostgreSQL, AWS EC2, Docker", image: tangleChatImg },
    { id: 2, name: "Arcade-Rate", desc: "Une plateforme de notation de jeux vidéo.", skills: "TypeScript, Node.js, React, Firebase", image: arcadeRateImg },
    { id: 3, name: "Black Market - Jeu Unity", desc: "Un jeu criminel en 2D.", skills: "C#, Unity, Développement de jeux 2D", image: blackMarketImg },
    { id: 4, name: "Le Monde de Yasu", desc: "Un jeu d'exploration en ligne.", skills: "TypeScript, React, Firebase, TailwindCSS", image: yasuImg },
    { id: 5, name: "Proxima Command", desc: "Un projet de commande spatiale basé sur Arduino.", skills: "Python, Pygame, CircuitPython, Arduino", image: proximaImg },
    { id: 6, name: "Flappy Bird Apprentissage par Renforcement", desc: "Une IA qui joue à Flappy Bird grâce au RL.", skills: "Python, PyTorch, OpenAI Gym, NumPy, Pandas", image: flappyBirdImg },
    { id: 7, name: "Bot de Trading d'Actions", desc: "Un bot automatisé pour le trading d'actions.", skills: "Python, QuantConnect, Jupyter Notebook, NumPy, Pandas, Scikit-learn", image: quantImg },
    { id: 8, name: "QBNB - Clone d'Airbnb", desc: "Un clone d'Airbnb.", skills: "Python, Flask, MongoDB, Pytest, Linux, Docker", image: qbnbImg },
    { id: 9, name: "Détection d'UAV", desc: "Un modèle d'apprentissage machine pour la détection de drones.", skills: "Python, YOLOv5, OpenCV", image: uavImg }
];

function FrenchHomePage() {
    return (
        <div className='main-page'>
            <div id='intro' className='intro'>
                <div className='big-intro-text'>
                    Salut! Je suis <span className='highlight'>Adlai Bridson-Boyczuk</span>,<br></br>
                    un développeur logiciel et diplômé en informatique de l'Université Queen’s.
                    <div className='small-intro-text'>
                        J'adore créer des choses ! J'aime travailler sur des applications web et utiliser
                        TypeScript, Python, React et Go. Actuellement, j'apprends encore et j'explore de nouvelles technologies !
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
                        <div className='project-box'>
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
                        <div className="experience-time">2024 — Présent</div>
                        <p>
                            Développement d'un logiciel en Python pour un simulateur spatial 8 joueurs.
                            Intégration de contrôles physiques avec un ingénieur en mécanique.
                            Optimisation du traitement des entrées, réduisant la latence de 30ms.
                        </p>
                        <div className="experience-skills">
                            <span>Python</span>
                            <span>Pygame</span>
                            <span>Arduino</span>
                            <span>Multithreading</span>
                        </div>
                    </div>
                </div>

                <div className="experience-entry">
                    <img src={theWorldofYasuLogo} alt="World of Yasu" className="experience-logo" />
                    
                    <div className="experience-details">
                        <h2>Développeur Junior · Le Monde de Yasu</h2>
                        <div className="experience-time">2023 — 2024</div>
                        <p>
                            Création d'une application web avec une animation d'intro personnalisée pour une startup de boisson énergisante.
                            Optimisation des performances de 100% grâce à un CDN et compatibilité mobile assurée.
                        </p>
                        <div className="experience-skills">
                            <span>TypeScript</span>
                            <span>React</span>
                            <span>Tailwind CSS</span>
                            <span>Firebase</span>
                        </div>
                    </div>
                </div>

                <div className="experience-entry">
                    <img src={QueensLogo} alt="Queen's University" className="experience-logo" />
                    
                    <div className="experience-details">
                        <h2>Informatique · Université Queen's</h2>
                        <div className="experience-time">2020 — 2024</div>
                        <p>
                            Obtention d'un baccalauréat spécialisé en informatique avec une moyenne de 3.7.
                            Spécialisation en développement logiciel, structures de données et intelligence artificielle.
                            Réalisation d'un projet de fin d'études sur la détection de drones à l'aide de l'apprentissage machine.
                        </p>
                        <div className="experience-skills">
                            <span>Python</span>
                            <span>Apprentissage Automatique</span>
                            <span>YOLOv5</span>
                            <span>OpenCV</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrenchHomePage;
