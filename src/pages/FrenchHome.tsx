import './Home.css';
import meImage from '../assets/image.png';
import { SetStateAction, useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';

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
    {
        id: 1,
        name: "Tangle-chat",
        desc: "Application web de messagerie en temps réel que je développe progressivement en une plateforme sociale complète. Fonctionnalité principale : messagerie instantanée avec persistance des messages. En cours d’ajout de mesures de sécurité et d’un système de publication.",
        skills: "Javascript, Go, React, PostgreSQL, AWS EC2, Docker",
        image: tangleChatImg,
        link: "http://tangle-chat.com/"
    },
    {
        id: 2,
        name: "Arcade-Rate",
        desc: "Application web permettant de noter, commenter, suivre et comparer vos jeux vidéo préférés. Le développement a été suspendu car l’API publique utilisée a été dépréciée.",
        skills: "TypeScript, Node.js, React, Firebase",
        image: arcadeRateImg,
        link: "https://github.com/boyczuk/web-arcade-rate"
    },
    {
        id: 3,
        name: "Black Market - Jeu Unity",
        desc: "Jeu stratégique en 2D vu du dessus, style Rimworld, mais dans un univers criminel. Créez, recrutez et gérez votre organisation criminelle à Senago. Implémentation d’un algorithme A* moderne pour des PNJ réactifs et intelligents.",
        skills: "C#, Unity, 2D Game Development",
        image: blackMarketImg,
        link: "https://github.com/boyczuk/BlackMarket2D"
    },
    {
        id: 4,
        name: "The World of Yasu",
        desc: "Développement d’un site personnalisé pour une startup de boisson énergisante saine à destination des gamers neurodivergents. Conception en collaboration avec des designers graphiques et des artistes.",
        skills: "TypeScript, React, Firebase, TailwindCSS, Figma",
        image: yasuImg,
        link: "https://theworldofyasu.com/explore-world"
    },
    {
        id: 5,
        name: "Proxima Command",
        desc: "Développement du logiciel de la salle d’évasion immersive Proxima Command. Deux équipes de 8 joueurs s’affrontent via des consoles physiques contrôlées par Arduino et mon logiciel.",
        skills: "Python, Pygame, CircuitPython, Arduino",
        image: proximaImg,
        link: "https://proximacommand.com/"
    },
    {
        id: 6,
        name: "Flappy Bird - Apprentissage par renforcement",
        desc: "Création d’un modèle Q-Learning utilisant OpenAI Gym pour apprendre à jouer à Flappy Bird de manière autonome.",
        skills: "Python, PyTorch, OpenAI Gym, NumPy, Pandas",
        image: flappyBirdImg,
        link: "https://github.com/boyczuk/FlappyBird-ReinforcementLearning"
    },
    {
        id: 7,
        name: "Bot de Trading Boursier",
        desc: "Bot de trading automatisé conçu pour la compétition interne de QUANTT (Queen’s University Algorithmic Network and Trading Team). Basé sur des indicateurs financiers pour prédire les mouvements de titres sur les marchés américains.",
        skills: "Python, QuantConnect, Jupyter Notebook, NumPy, Pandas, Scikit-learn",
        image: quantImg,
        link: "https://github.com/boyczuk"
    },
    {
        id: 8,
        name: "QBNB - Clone d'Airbnb",
        desc: "Clone d’Airbnb développé en équipe dans le cadre d’un cours d’assurance qualité à Queen’s University. Méthodologie Scrum suivie pour le développement, les tests et les aspects sécurité.",
        skills: "Python, Flask, MongoDB, Pytest, Linux, Docker",
        image: qbnbImg,
        link: "https://github.com/mad-cat-lon/qbnb"
    },
    {
        id: 9,
        name: "Détection de Drones (UAV)",
        desc: "Modèle d’apprentissage automatique pour détecter les UAVs (drones) par rapport à d’autres objets aériens dans un environnement stochastique. 14 000+ images et 650 vidéos collectées depuis des bases de données annotées en open-source.",
        skills: "Python, YOLOv5, OpenCV",
        image: uavImg,
        link: "https://l1nna.com/"
    }
];


function FrenchHomePage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 600);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='main-page'>
            <div id='intro' className='intro'>
                {isMobile ? (
                    <div className='mobile-intro'>
                        <div className='big-intro-text'>
                            <p>Adlai Bridson-Boyczuk</p>
                            <p className='intro-subtext'>Développeur Logiciel</p>
                        </div>

                        <div className='icons'>
                            <li><FaGithub onClick={() => window.open('https://github.com/boyczuk', '_blank')} /></li>
                            <li><FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/adlai-bridson-boyczuk/', '_blank')} /></li>
                            <li><InstagramIcon onClick={() => window.open('https://www.instagram.com/boyczuk/', '_blank')} /></li>
                            <li><SportsKabaddiIcon onClick={() => window.open('https://smoothcomp.com/en/profile/1073699', '_blank')} /></li>
                        </div>

                        <div className='intro-image'>
                            <img src={meImage} alt="Adlai Bridson-Boyczuk" />
                        </div>

                        <div className='small-intro-text'>
                            <h3>À propos</h3>
                            <p>J’adore créer des choses ! Professionnellement, j’ai développé des applications web et des logiciels avec TypeScript, Python, React et Firebase.</p>
                            <p>En ce moment, je travaille sur un site de messagerie en Go et j’approfondis mes connaissances en Java.</p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='big-intro-text'>
                            Salut ! Je m’appelle <span className='highlight'>Adlai Bridson-Boyczuk</span>,<br />
                            développeur logiciel basé à Toronto, Ontario.
                            <div className='small-intro-text'>
                                J’adore créer des choses ! Professionnellement, j’ai développé des applications web et des logiciels avec TypeScript, Python, React et Firebase.
                                En ce moment, je me concentre sur l’apprentissage de Go et le renforcement de mes compétences en Java.
                                <br /><br />
                            </div>
                        </div>

                        <div className='intro-image'>
                            <img src={meImage} alt="Adlai Bridson-Boyczuk" />
                            <div className='icons'>
                                <li><FaGithub onClick={() => window.open('https://github.com/boyczuk', '_blank')} /></li>
                                <li><FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/adlai-bridson-boyczuk/', '_blank')} /></li>
                                <li><InstagramIcon onClick={() => window.open('https://www.instagram.com/boyczuk/', '_blank')} sx={{ fontSize: '100px' }} /></li>
                                <li><SportsKabaddiIcon onClick={() => window.open('https://smoothcomp.com/en/profile/1073699', '_blank')} sx={{ fontSize: '100px' }} /></li>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className="scroll-arrow" onClick={() => scrollToSection('projects')}>
                ↓
            </div>

            <div id='projects' className='projects'>
                <h1>Projets</h1>
                <div className='project-container'>
                    {projects.map((project) => (
                        isMobile ? (
                            <div className='project-box' key={project.id} onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}>
                                <div className='mobile-project-content'>
                                    <div className='project-info'>
                                        <div className='project-header'>
                                            <p className='project-title'>{project.name} <OpenInNewIcon className='projects-icon' /></p>
                                        </div>
                                        <p className='project-desc'>{project.desc /* Optional: translate each individually */}</p>
                                        <div className='project-tags'>
                                            {project.skills.split(',').map((skill, idx) => (
                                                <span className='project-tag' key={idx}>{skill.trim()}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <img className='project-cover' src={project.image} alt={project.name} />
                                </div>
                            </div>
                        ) : (
                            <div className='project-box' key={project.id} onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}>
                                <div className='project-image-wrapper'>
                                    <img className='project-cover' src={project.image} alt={project.name} />
                                    <div className='project-overlay'>
                                        {project.skills.split(',').map((skill, idx) => (
                                            <span className='project-tag' key={idx}>{skill.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                                <p>{project.name}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>

            <div id="experience" className="experience">
                <h1>Expérience</h1>

                <div className="experience-entry">
                    <img src={ProximaCommandLogo} alt="Proxima Command" className="experience-logo" />
                    <div className="experience-details">
                        {isMobile ? (
                            <>
                                <div className="experience-time">Juillet 2024 – Octobre 2024</div>
                                <h2>Développeur Logiciel · Proxima Command</h2>
                            </>
                        ) : (
                            <>
                                <h2>Développeur Logiciel · Proxima Command</h2>
                                <div className="experience-time">Juillet 2024 – Octobre 2024</div>
                            </>
                        )}

                        <p>
                            Développé un logiciel en Python pour un simulateur de vaisseau spatial multijoueur, avec commandes physiques via Arduino. Réduction de la latence de 30 ms et mise en place d’un système multithreadé pour améliorer la réactivité.
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
                        {isMobile ? (
                            <>
                                <div className="experience-time">Mai 2023 – Janvier 2024</div>
                                <h2>Développeur Junior · The World of Yasu</h2>
                            </>
                        ) : (
                            <>
                                <h2>Développeur Junior · The World of Yasu</h2>
                                <div className="experience-time">Mai 2023 – Janvier 2024</div>
                            </>
                        )}

                        <p>
                            Conception et développement d’un site web animé pour une startup. Utilisation de TypeScript, React et Tailwind CSS pour améliorer les performances et garantir une compatibilité mobile complète.
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
                        {isMobile ? (
                            <>
                                <div className="experience-time">Septembre 2020 – Avril 2024</div>
                                <h2>Informatique · Queen's University</h2>
                            </>
                        ) : (
                            <>
                                <h2>Informatique · Queen's University</h2>
                                <div className="experience-time">Septembre 2020 – Avril 2024</div>
                            </>
                        )}

                        <p>
                            Baccalauréat en informatique avec spécialisation en intelligence artificielle. Mon projet de fin d’études portait sur la détection de drones avec l’apprentissage automatique (YOLOv5 et OpenCV).<br /> Liste d’honneur du doyen (2022, 2023, 2024).
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
                            <span>Programmation fonctionnelle</span>
                            <span>Vision par ordinateur</span>
                            <span>Apprentissage profond</span>
                            <span>Apprentissage par renforcement</span>
                        </div>
                    </div>
                </div>

                <div className="Resume-link" onClick={() => { window.open('/WebsiteResume.pdf', '_blank') }}>
                    <h2>CV {<OpenInNewIcon />}</h2>
                </div>
            </div>

            <div className="footer">
                <p>© {new Date().getFullYear()} Adlai Bridson-Boyczuk. Tous droits réservés.</p>
            </div>
        </div>
    );
}

export default FrenchHomePage;
