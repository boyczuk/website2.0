import './Home.css';
import meImage from '../assets/image.png';
import { useState, useEffect } from 'react';
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

import ClutchLogo from '../assets/ClutchLogo.png'
import Phase5Logo from '../assets/Phase5Logo.png';
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
    { id: 1, name: "Tangle-chat", desc: "Built a real-time messaging web app that I can slowly expand into a full social media platform. Currently the main functional feature is real time messaging, and messaging persistence. Currently in the process of implementing security precautions and adding a posting system.", skills: "Javascript, Go, React, PostgreSQL, AWS EC2, Docker", image: tangleChatImg, link: "http://tangle-chat.com/" },
    { id: 2, name: "Arcade-Rate", desc: "Web app created to rate, review, track, and compare your favourite video games. Development has halted since public API I was using has since been deprecated.", skills: "TypeScript, Node.js, React, Firebase", image: arcadeRateImg, link: "https://github.com/boyczuk/web-arcade-rate" },
    { id: 3, name: "Black Market - Unity game", desc: "Top down 2D strategy crime game coded in Unity2D. Think Rimworld but for organized crime. In this game you create, hire and organize your new organized crime group/mafia/cartel and fight for territory in the city of Senago. Implemented modern A* pathfinding algorithms to ensure responsive and intelligent NPCs.", skills: "C#, Unity, 2D Game Development", image: blackMarketImg, link: "https://github.com/boyczuk/BlackMarket2D" },
    { id: 4, name: "The World of Yasu", desc: "Developed a custom site for a healthy energy drink startup with the target audience being neurodivergent gamers. Helped design the side alongisde graphics designers and other artists", skills: "TypeScript, React, Firebase, TailwindCSS, Figma", image: yasuImg, link: "https://theworldofyasu.com/explore-world" },
    { id: 5, name: "Proxima Command", desc: "Wrote the software behind Proxima Command's Starship Simulator in person escape room. Two teams of 8 players face off using physical consoles controlled using Arduinos and my software.", skills: "Python, Pygame, CircuitPython, Arduino", image: proximaImg, link: "https://proximacommand.com/" },
    { id: 6, name: "Flappy Bird Reinforcement Learning", desc: "Developed a Q-Learning reinforcement learning model in OpenAI gym to learn to play Flappy Bird.", skills: "Python, PyTorch, OpenAI Gym, NumPy, Pandas", image: flappyBirdImg, link: "https://github.com/boyczuk/FlappyBird-ReinforcementLearning" },
    { id: 7, name: "Equities Trading Bot", desc: "An automated trading bot was created as part of QUANTT (Queen's University Algorithmic Network and Trading Team). Submitted as part of their trading algorithm competition. Used a mixture of financial indicators and patterns to predict when to buy/sell securities in the American stock market.", skills: "Python, QuantConnect, Jupyter Notebook, NumPy, Pandas, Scikit-learn", image: quantImg, link: "https://github.com/boyczuk" },
    { id: 8, name: "QBNB - Airbnb Clone", desc: "A clone of Airbnb created in a team for my Software Quality Assurance course at Queen's University. This project involved following Scrum to develop the software with appropriate development, testing, and security concerns.", skills: "Python, Flask, MongoDB, Pytest, Linux, Docker", image: qbnbImg, link: "https://github.com/mad-cat-lon/qbnb" },
    { id: 9, name: "UAV Detection", desc: "Machine Learning model for detecting UAVs versus other aerial objects in a stochastic environment. Collected 14,000+ images, and 650 videos from open sourced annotated datasets to use as training data.", skills: "Python, YOLOv5, OpenCV", image: uavImg, link: "https://l1nna.com/" }
];


function HomePage() {
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
        <>
            <div className='main-page'>
                <div id='intro' className='intro'>
                    {isMobile ? (
                        // MOBILE STRUCTURE
                        <div className='mobile-intro'>
                            <div className='big-intro-text'>
                                <p>Adlai Bridson-Boyczuk</p>
                                <p className='intro-subtext'>Software Developer</p>
                            </div>

                            <div className='icons'>
                                <li><FaGithub onClick={() => window.open('https://github.com/boyczuk', '_blank')} /></li>
                                <li><FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/adlai-bridson-boyczuk/', '_blank')} /></li>
                                <li><InstagramIcon onClick={() => window.open('https://www.instagram.com/boyczuk/', '_blank')} /></li>
                                <li><SportsKabaddiIcon onClick={() => window.open('https://smoothcomp.com/en/profile/1073699', '_blank')} /></li>
                            </div>

                            {/* Image moves below name and some description on mobile */}
                            <div className='intro-image'>
                                <img src={meImage} alt="Adlai Bridson-Boyczuk" />
                            </div>


                            <div className='small-intro-text'>
                                <h3>About</h3>
                                I love building things! Professionally, I’ve developed web apps and software using TypeScript, Python, React, and Firebase.
                                Currently, I'm focused on building my skills in TypeScript, Node, Express, React, and PostgreSQL.
                                <br /><br />
                            </div>


                        </div>
                    ) : (
                        // DESKTOP STRUCTURE (Unchanged)
                        <>
                            <div className='big-intro-text'>
                                Hi! I’m <span className='highlight'>Adlai Bridson-Boyczuk</span>,<br />
                                a software developer from Toronto, Ontario.
                                <div className='small-intro-text'>
                                    I love building things! Professionally, I’ve developed web apps and software using TypeScript, Python, React, and Firebase.
                                    Currently, I'm focused on building my skills in TypeScript, Node, Express, React, and PostgreSQL.
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

                <div className="cat-divider">
                    <div className="catContainer">
                        <div className="catHead catColor">
                            <div className="catLeftEye catEye">
                                <div className="leftEyelid eyelid catColor"></div>
                                <div className="pupil"></div>
                            </div>
                            <div className="catRightEye catEye">
                                <div className="rightEyelid eyelid catColor"></div>
                                <div className="pupil"></div>
                            </div>
                        </div>
                        <div className="catLeftEar catEar catColor">
                            <div className="catLeftInsideEar catInsideEar"></div>
                        </div>
                        <div className="catRightEar catEar catColor">
                            <div className="catRightInsideEar catInsideEar"></div>
                        </div>
                        <div className="catHair catColor"></div>
                        <div className="catBody catColor">
                            <div className="catFoot leftFoot catColor"></div>
                            <div className="catFoot rightFoot catColor"></div>
                        </div>
                        <div className="catTail">
                            {Array.from({ length: 15 }).map((_, index) => (
                                <span className="catColor" key={index}></span>
                            ))}
                        </div>
                    </div>
                </div>

                <div id='projects' className='projects'>

                    <h1>Projects</h1>
                    <div className='project-container'>
                        {projects.map((project) => (
                            isMobile ? (
                                // Mobile Structure (Image Left, Title Right)
                                <div className='project-box' key={project.id} onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}>
                                    <div className='mobile-project-content'>
                                        <div className='project-info'>
                                            <div className='project-header'>
                                                <p className='project-title'>{project.name} <OpenInNewIcon className='projects-icon' /></p>
                                            </div>
                                            <p className='project-desc'>{project.desc}</p>
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
                                // Desktop Structure (Image on Top, Title Below)
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
                    <h1>Experience</h1>

                    {/* <div className="experience-entry">
                        <img src={ClutchLogo} alt="Clutch" className="experience-logo" />
                        <div className="experience-details">
                            {isMobile ? (
                                <>
                                    <div className="experience-time">May 2025 – Present</div>
                                    <h2>Software Engineer · Clutch</h2>
                                </>
                            ) : (
                                <>
                                    <h2>Software Engineer · Clutch</h2>
                                    <div className="experience-time">May 2025 – Present</div>
                                </>
                            )}

                            <p>
                                Incoming role. Haven't started yet.
                            </p>
                            <div className="experience-skills">
                                <span>TypeScript</span>
                                <span>Express</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>PostgreSQL</span>
                                <span>Next.js</span>
                                <span>Kafka</span>
                                <span>RabbitMQ</span>
                                <span>Terraform</span>
                            </div>
                        </div>
                    </div> */}

                    <div className="experience-entry">
                        <img src={Phase5Logo} alt="Phase 5" className="experience-logo" />
                        <div className="experience-details">
                            {isMobile ? (
                                <>
                                    <div className="experience-time">April 2025 – May 2025</div>
                                    <h2>Software Developer (Contract)· Phase 5</h2>
                                </>
                            ) : (
                                <>
                                    <h2>Software Developer · Phase 5</h2>
                                    <div className="experience-time">April 2025 – May 2025</div>
                                </>
                            )}

                            <p>
                                Programmed a Python-based automation tool to generate presentations based on market research reports.
                            </p>
                            <div className="experience-skills">
                                <span>Python</span>
                                <span>Pandas</span>
                                <span>NumPy</span>
                                <span>win32com</span>
                                <span>Excel</span>
                            </div>
                        </div>
                    </div>

                    <div className="experience-entry">
                        <img src={ProximaCommandLogo} alt="Proxima Command" className="experience-logo" />
                        <div className="experience-details">
                            {isMobile ? (
                                <>
                                    <div className="experience-time">July 2024 – Oct 2024</div>
                                    <h2>Software Developer · Proxima Command</h2>
                                </>
                            ) : (
                                <>
                                    <h2>Software Developer · Proxima Command</h2>
                                    <div className="experience-time">July 2024 – Oct 2024</div>
                                </>
                            )}

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
                            {isMobile ? (
                                <>
                                    <div className="experience-time">May 2023 – Jan 2024</div>
                                    <h2>Junior Developer · The World of Yasu</h2>
                                </>
                            ) : (
                                <>
                                    <h2>Junior Developer · The World of Yasu</h2>
                                    <div className="experience-time">May 2023 – Jan 2024</div>
                                </>
                            )}

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
                            {isMobile ? (
                                <>
                                    <div className="experience-time">Sept 2020 – April 2024</div>
                                    <h2>Computer Science · Queen's University</h2>
                                </>
                            ) : (
                                <>
                                    <h2>Computer Science · Queen's University</h2>
                                    <div className="experience-time">Sept 2020 – April 2024</div>
                                </>
                            )}

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

                    <div className="Resume-link" onClick={() => { window.open('/WebsiteResume.pdf', '_blank') }}>
                        <h2>Resume {<OpenInNewIcon />}</h2>
                    </div>
                </div>

                <div className="footer">
                    <p>© {new Date().getFullYear()} Adlai Bridson-Boyczuk. All rights reserved.</p>
                    <p>
                        Cat animation credit:
                        {" "}
                        <a
                            href="https://www.reddit.com/user/RealLacomus"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cat-credit-link"
                        >
                            u/RealLacomus
                        </a>
                    </p>


                </div>
            </div>
        </>
    )
}

export default HomePage;