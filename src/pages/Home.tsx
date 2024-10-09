import './Home.css';
import resume from '../assets/websiteresume.pdf';
import me from '../assets/me.jpg';
import me2 from '../assets/me2.jpg';
import me3 from '../assets/me3.jpg';
import me5 from '../assets/me5.jpg';
import { FaLinkedin, FaGithub, FaFistRaised } from 'react-icons/fa'; // Importing a fist icon


function HomePage() {
    return (
        <div className='container'>
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
                                <img src={me} alt="Photo of Adlai" />
                                <img src={me2} alt="Photo of Adlai" />
                                <img src={me5} alt="Photo of Adlai" />
                                <img src={me3} alt="Photo of Adlai" />
                            </div>
                            <p>Beyond school and programming, I spend most of my time reading, training Brazilian Jiu-Jitsu, or watching MMA.</p>

                            <p>Please contact me at <a className="clickable-link" href="mailto:adlaibridsonboyczuk@gmail.com">adlaibb@gmail.com</a></p>
                            <p>Thanks!</p>
                            <a href={resume} target="_blank" className="rlink">
                                Resume
                            </a>
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

                            <div id="courses" className='courses'>
                                <h3>Relevant Courses</h3>
                                <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-455" className="clickable-link" target="_blank">Evolutionary Optimization | 2024</a></li>
                                <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-474" className="clickable-link" target="_blank">Reinforcement Learning | 2024</a></li>
                                <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-365" className="clickable-link" target="_blank">Algorithms | 2023</a></li>
                                <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-235" className="clickable-link" target="_blank">Data Structures | 2022</a></li>
                                <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-352" className="clickable-link" target="_blank">Artificial Intelligence | 2023</a></li>
                                <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-452" className="clickable-link" target="_blank">Neural & Genetic Computing | 2023</a></li>
                                <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-324" className="clickable-link" target="_blank">Operating Systems | 2022</a></li>
                                <li><a href="https://www.cs.queensu.ca/undergraduate/courses/CISC-327" className="clickable-link" target="_blank">Software Quality Assurance | 2022</a></li>
                            </div>
                        </div>

                        <div id="projects" className='project'>

                            <p className="project-boxes">
                                <h3>Projects</h3>
                                <b><a href="https://github.com/boyczuk" className="clickable-link" target="_blank">
                                    UAV Detection Capstone Thesis</a></b> | <i>Python, PyTorch, YOLOv5, OpenCV, MATLAB, NumPy, pandas</i>
                                <li>
                                    Developed a YOLOv5-based detection system that achieved 77% accuracy in distinguishing UAVs from other aerial objects. Utilized OpenCV for visualization and label data normalization, resulting in 94.4% precision and 93.2% recall.
                                </li>
                            </p>



                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk/web-arcade-rate" className="clickable-link" target="_blank">Arcade-Rate</a></b> | <i>TypeScript, Node.js, Express.js, Firebase, React</i>
                                <li>
                                    Developed a full-stack web application that ranks, compares, and tracks video games. Integrated data from IGDB via an Express.js backend and hosted it with Firebase cloud functions.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk/BlackMarket2D" className="clickable-link" target="_blank">BlackMarket2D</a></b> | <i>C#, Unity, 2D Game Development</i>
                                <li>
                                    Developed a crime-oriented 2D isometric game where players manage autonomous NPCs and control a criminal organization, featuring base-building mechanics and dynamic interactions.
                                </li>
                            </p>


                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk" className="clickable-link" target="_blank">CNN for Tomato Disease Classification</a></b> | <i>Python, Jupyter Notebooks, TensorFlow, Keras</i>
                                <li>
                                    Built a Convolutional Neural Network that classified tomato leaf diseases into 10 classes using over 11,000 images, achieving a 75% validation accuracy by implementing dropout layers to combat overfitting.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk/FlappyBird-ReinforcementLearning" className="clickable-link" target="_blank">
                                    Flappy Bird Q-Learning Reinforcement Learning Approach</a></b> | <i>Python, OpenAI Gym, Reinforcement Learning, NumPy, Pandas</i>
                                <li>
                                    Implemented a model-free reinforcement learning algorithm to maximize the agent's score in the Flappy Bird game.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk" className="clickable-link" target="_blank">Equities Trading Algorithm</a></b> |{" "}
                                <i>Python, Jupyter Notebooks, NumPy, pandas, QuantConnect, Scikit-learn</i>
                                <li>
                                    Created a Python-based trading algorithm that achieved an 18% profit over a 3-year backtest against the S&P 500. Combined SMA and RSI indicators to identify optimal short-selling opportunities in Tech and Real Estate sectors.
                                </li>
                            </p>



                            <p className="project-boxes">
                                <b><a href="https://theworldofyasu.com" className="clickable-link" target="_blank">The World of Yasu</a></b> |{" "}
                                <i>Typescript, React.js, Firebase, HTML, CSS, MaterialUI</i>
                                <li>
                                    Created a dynamic marketing and sales webapp for an energy drink company with a custom animated intro.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk" className="clickable-link" target="_blank">Spending Tracker</a></b> |{" "}
                                <i>Javascript, React, Flask, Electron, Sqlite3, HTML, CSS, MaterialUI</i>
                                <li>
                                    Built a desktop application to track, view, and manage personal finances. Implemented a React frontend using Electron and a Flask backend for expense organization.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/mad-cat-lon/qbnb" className="clickable-link" target="_blank">QBNB</a></b> | <i>Python, Flask, MongoDB, Pytest, Linux, Docker</i>
                                <li>
                                    Collaborated on a Python-based property rental and booking CLI app, using Flask to manage user data in MongoDB.
                                </li>
                                <li>
                                    Developed automated unit and integration tests with Pytest, ensuring CI/CD pipeline quality through GitHub Actions.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk" className="clickable-link" target="_blank">Forest Rumble</a></b> | <i>C#, Unity, HTML, Photoshop</i>
                                <li>
                                    Led the development of a 2D level-based platformer, introducing novel physics mechanics to enhance player movement.
                                </li>
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage;