import './Home.css';
import { SetStateAction, useState } from 'react';
import resume from '../assets/websiteresume.pdf';
import me from '../assets/me.jpg';
import me2 from '../assets/me2.jpg';
import me5 from '../assets/me5.jpg';
import { FaLinkedin, FaGithub, FaFistRaised, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import FallingLeaves from '../components/FallingLeaves';


function HomePage() {
    const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            title: "UAV Detection Capstone Thesis",
            tech: "Python, PyTorch, YOLOv5, OpenCV, MATLAB, NumPy, pandas",
            description: "Developed a YOLOv5-based detection system as a Capstone thesis in my final year of undergraduate that achieved 77% accuracy in distinguishing UAVs from other aerial objects. Utilized OpenCV for visualization and label data normalization, resulting in 94.4% precision and 93.2% recall.",
            link: "https://github.com/boyczuk",
        },
        {
            title: "Arcade-Rate",
            tech: "TypeScript, Node.js, Express.js, Firebase, React",
            description: "Developed a full-stack web application that ranks, compares, and tracks video games. Integrated data from IGDB via an Express.js backend and hosted it with Firebase cloud functions.",
            link: "https://github.com/boyczuk/web-arcade-rate",
        },
        {
            title: "BlackMarket2D",
            tech: "C#, Unity, 2D Game Development",
            description: "Currently developing a crime-oriented 2D isometric game where players manage autonomous NPCs and control a criminal organization, featuring base-building mechanics and dynamic interactions between gangs and their respective hierarchies.",
            link: "https://github.com/boyczuk/BlackMarket2D",
        },
        {
            title: "CNN for Tomato Disease Classification",
            tech: "Python, Jupyter Notebooks, TensorFlow, Keras",
            description: "Group assignment for my Neural and Genetic Computing course at Queen's University where we trained a Convolutional Neural Network to classified tomato leaf diseases into 10 classes using over 11,000 images, achieving a 75% validation accuracy by implementing dropout layers to combat overfitting.",
            link: "https://github.com/boyczuk",
        },
        {
            title: "The World of Yasu",
            tech: "TypeScript, React.js, Firebase, HTML, CSS, MaterialUI",
            description: "Created a dynamic marketing and sales webapp for an energy drink company with a custom animated intro. I worked directly with a Senior Developer, graphic designers and the client to turn their ideas and designs into a functional React site.",
            link: "https://theworldofyasu.com",
        },
        {
            title: "Proxima Command Starship Simulator",
            tech: "Python, Pygame, CircuitPython",
            description: "I was hired as a contract programmer to code a Python-based starship emulator using Pygame, creating a proof-of-concept for a physical game room where two teams could compete against each other. While developing this I had to take into consideration hardware constraints as a mechanical engineer was also creating physical systems to work alongside my software.",
            link: "https://proximacommand.com/",
        },
        {
            title: "Flappy Bird Q-Learning Reinforcement Learning Approach",
            tech: "Python, OpenAI Gym, Reinforcement Learning, NumPy, Pandas",
            description: "Implemented a model-free reinforcement learning algorithm to maximize the agent's score in the Flappy Bird game for my Reinforcement Learning course.",
            link: "https://github.com/boyczuk/FlappyBird-ReinforcementLearning",
        },
        {
            title: "Equities Trading Algorithm",
            tech: "Python, Jupyter Notebooks, NumPy, pandas, QuantConnect, Scikit-learn",
            description: "Created a Python-based trading algorithm that achieved an 18% profit over a 3-year backtest against the S&P 500. Combined SMA and RSI indicators to identify optimal short-selling opportunities in Tech and Real Estate sectors.",
            link: "https://github.com/boyczuk",
        },
        {
            title: "Spending Tracker",
            tech: "JavaScript, React, Flask, Electron, Sqlite3, HTML, CSS, MaterialUI",
            description: "Built a desktop application to track, view, and manage personal finances. Implemented a React frontend using Electron and a Flask backend for expense organization.",
            link: "https://github.com/boyczuk",
        },
        {
            title: "QBNB",
            tech: "Python, Flask, MongoDB, Pytest, Linux, Docker",
            description: "Collaborated on a Python-based property rental and booking CLI app, using Flask to manage user data in MongoDB. Developed automated unit and integration tests with Pytest, ensuring CI/CD pipeline quality through GitHub Actions.",
            link: "https://github.com/mad-cat-lon/qbnb",
        },
        {
            title: "Forest Rumble",
            tech: "C#, Unity, HTML, Photoshop",
            description: "Led the development of a 2D level-based platformer, introducing novel physics mechanics to enhance player movement.",
            link: "https://github.com/boyczuk",
        },
    ];

    const toggleProject = (index: number) => {
        setExpandedProjects((prevExpandedProjects) =>
            prevExpandedProjects.includes(index)
                ? prevExpandedProjects.filter((i) => i !== index) // Remove index
                : [...prevExpandedProjects, index] // Add index
        );
    }

    const toggleShowAll = () => {
        setShowAll(!showAll);
    }

    return (
        <div className='container'>
            <FallingLeaves />
            <div className='content'>
                <div className='sections'>
                    <div className='title'>Adlai Bridson-Boyczuk</div>
                    <div className='social-icons'>
                        <a href="https://www.linkedin.com/in/adlai-bridson-boyczuk/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon linkedin-icon" />
                        </a>
                        <a href="https://github.com/boyczuk" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon github-icon" />
                        </a>
                        <a href="https://smoothcomp.com/en/profile/1073699" target="_blank" rel="noopener noreferrer">
                            <FaFistRaised className="icon smoothcomp-icon" />
                        </a>
                    </div>
                    <div className='smaller-sec'>
                        <div id="about" className='about'>
                            <h3>About</h3>
                            <div className="intro-container" >
                                <p>Hey there, I am a recent Computer Science graduate from Queen's University looking to find entry level work as a Software Engineer or Developer.

                                </p>
                            </div>


                            <p>Previously I worked at <a className="clickable-link" href="https://theworldofyasu.com">The World of Yasu</a> as a Junior Web Developer and as a Programmer
                                for <a className="clickable-link" href="https://proximacommand.com/">Proxima Command</a> developing the system to their new starship simulator game.</p>
                            <div className="image-row">
                                <img src={me} alt="Adlai in Brazilian Jiu Jitsu tournament" />
                                <img src={me2} alt="Promoted to blue belt in Jiu Jitsu" />
                                <img src={me5} alt="Petting elephant" />
                            </div>
                            <p>Beyond school and programming, I spend most of my time reading, training Brazilian Jiu-Jitsu, or watching MMA.</p>

                            <p>Please contact me at <a className="clickable-link" href="mailto:adlaibb@gmail.com">adlaibb@gmail.com</a></p>
                            {/*<a href={resume} target="_blank" rel="noreferrer" className="rlink">
                                Resume
                            </a>*/}
                        </div>


                        <div id="projects" className='project'>
                            <h3>Projects</h3>
                            {projects.slice(0, showAll ? projects.length : 5).map((project, index) => (
                                <div
                                    key={index}
                                    className='project-box'
                                    onClick={() => toggleProject(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <b>
                                        <a
                                            href={project.link}
                                            className='clickable-link'
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {project.title}
                                        </a>
                                    </b>
                                    <i> {project.tech}</i>
                                    {expandedProjects.includes(index) && <li>{project.description}</li>}
                                </div>
                            ))}
                        </div>
                        <div className='show-more-container'>
                            <button onClick={toggleShowAll} className='show-more-btn'>
                                {showAll ? (
                                    <>
                                        Show Less <FaChevronUp />
                                    </>
                                ) : (
                                    <>
                                        Show All <FaChevronDown />
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="skills-courses-container">
                            <div id="skills" className='skills'>
                                <h3>Technical Skills</h3>
                                <b>Languages:</b>
                                <li>
                                    Python, JavaScript, Typescript, Java, C, Bash, x86 Assembly,
                                </li>
                                <b>Frameworks:</b>
                                <li>
                                    HTML/CSS, jQuery, Node.js, Express.js, React, Flask, Unity
                                </li>
                                <b>Technologies:</b>
                                <li>
                                    MongoDB, MySQL, pandas, NumPy, Pytest, Linux, Excel, Git,
                                    Docker, VS Code, NetBeans, Eclipse{" "}
                                </li>
                            </div>

                            <div id="courses" className="courses">
                                <h3>Relevant Courses</h3>
                                <ul>
                                    <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-455" className="clickable-link" target="_blank" rel="noreferrer">Evolutionary Optimization</a></li>
                                    <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-474" className="clickable-link" target="_blank" rel="noreferrer">Reinforcement Learning</a></li>
                                    <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-365" className="clickable-link" target="_blank" rel="noreferrer">Algorithms</a></li>
                                    <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-235" className="clickable-link" target="_blank" rel="noreferrer">Data Structures</a></li>
                                    <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-352" className="clickable-link" target="_blank" rel="noreferrer">Artificial Intelligence</a></li>
                                    <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-452" className="clickable-link" target="_blank" rel="noreferrer">Neural & Genetic Computing</a></li>
                                    <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-324" className="clickable-link" target="_blank" rel="noreferrer">Operating Systems</a></li>
                                    <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-327" className="clickable-link" target="_blank" rel="noreferrer">Software Quality Assurance</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage;