import './Home.css';
import resume from '../assets/Adlai_Resume.pdf';
import me from '../assets/me.jpg';
import me2 from '../assets/me2.jpg';
import me3 from '../assets/me3.jpg';
import me4 from '../assets/me4.jpg';

function HomePage() {
    return (
        <div className='container'>
            <div className='content'>
                <div className='sections'>
                    <div className='title'>Adlai Bridson-Boyczuk</div>
                    <div className='smaller-sec'>
                        <div id="about" className='about'>
                            <h3>About</h3>
                            <div className="intro-container" >
                                <p>Hey there, I am a software developer who recently graduated from Computer Science at Queen's University.
                                    Previously I worked at <a className="clickable-link" href="https://theworldofyasu.com">Yasu Energy</a> as a Junior Web Developer.</p>

                            </div>


                            <p>During my time at Queen's University I have spent time developing projects on my own and as a part of several organizations like QUANTT
                                (Queen's University Algorithmic Network & Trading Team) and QWEB (Queen's University Web Development Club).</p>
                            <div className="image-row">
                                <img src={me} alt="Photo of Adlai" />
                                <img src={me2} alt="Photo of Adlai" />
                                <img src={me3} alt="Photo of Adlai" />
                                <img src={me4} alt="Photo of Adlai" />
                            </div>
                            <p>Beyond school and programming, I spend most of my time reading, training Brazilian Jiu-Jitsu, or watching MMA.</p>

                            <p>Please contact me at <a className="clickable-link" href="mailto:adlaibridsonboyczuk@gmail.com">adlaibridsonboyczuk@gmail.com</a></p>
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
                                    AI for Video-Based Counter Uncrewed Aerial Systems</a></b> | <i>Python, TensorFlow, NumPy, Pandas</i>
                                <li>
                                    Collected data from open-source repositories, utilizing machine learning algorithms (Convolutional Neural Networks),
                                    and developed a concept for identifying UAS/UAVs through video footage.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk/FlappyBird-ReinforcementLearning" className="clickable-link" target="_blank">
                                    A Q-Learning RL approach to solving flappy bird</a></b> | <i>Python, OpenAI Gym, Reinforcement Learning, NumPy, Pandas</i>
                                <li>
                                    Used a model-free reinforcement learning algorithm to maximize the total score an agent playing Flappy Bird achieved.
                                </li>
                            </p>

                            <p className="project-boxes">

                                <b><a href="https://github.com/boyczuk" className="clickable-link" target="_blank">Equities Trading Algorithm</a></b> |{" "}
                                <i>Python, Jupyter Notebooks, NumPy, pandas, QuantConnect, Scikit-learn</i>
                                <li>
                                    Developed a Python securities trading algorithm that achieved 18%
                                    profit in 3-year backtest against S&P 500
                                </li>
                                <li>
                                    Implemented a SMA paired with a RSI indicator to determine when to
                                    short Technology and Real Estate securities.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk/web-arcade-rate" className="clickable-link" target="_blank">Arcade-rate</a></b> | <i>TypeScript, Node.js, Express.js, Firebase, React</i>
                                <li>
                                    MERN web application to track and rate your favourite video games.
                                </li>
                            </p>
                            <p className="project-boxes">
                                <b><a href="https://theworldofyasu.com" className="clickable-link" target="_blank">The World of Yasu</a></b> |{" "}
                                <i>Typescript, React.js, Firebase, HTML, CSS, MaterialUI</i>
                                <li>
                                    Dynamic marketing and sales website for an Energy drink company.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk" className="clickable-link" target="_blank">Spending Tracker</a></b> |{" "}
                                <i>Javascript, React, Flask, Electron, Sqlite3, HTML, CSS, MaterialUI</i>
                                <li>
                                    Desktop app used to track, view, and better manage my personal finances.
                                </li>
                                <li>
                                    React frontend running on Electron, using Flask as a backend to store and organize expenses.
                                </li>
                            </p>

                            <p className="project-boxes">
                                <b><a href="https://github.com/mad-cat-lon/qbnb" className="clickable-link" target="_blank">QBNB</a></b> | <i>Python, Flask, MongoDB, Pytest, Linux, Docker</i>
                                <li>
                                    Collaborated on a Python-based CLI app for property rentals and
                                    booking using a Flask server, managing user data in MongoDB
                                </li>
                                <li>
                                    Followed an agile development cycle and utilized Pytest for unit and
                                    integration testing to ensure product quality
                                </li>
                            </p>




                            <p className="project-boxes">
                                <b><a href="https://github.com/boyczuk" className="clickable-link" target="_blank">Forest Rumble</a></b> | <i>C#, Unity, HTML, Photoshop</i>
                                <li>
                                    Led development of a 2D level-based platformer. Added novel physics
                                    mechanics to pair with player movement
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