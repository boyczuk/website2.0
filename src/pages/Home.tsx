import Navbar from '../components/FloatingNavbar';
import Header from '../components/Header';
import './Home.css';

function HomePage() {
    return (
        <div className='container'>

            <Navbar />

            <div className='content'>

                <div className='sections'>

                    <div className='about'>
                        <h3>About me</h3>
                        <p>Hi, my name is Adlai Bridson-Boyczuk I am a software developer currently in my 3rd year of studying Computer Science at Queen's University.
                            At the moment I am working at Yasu Energy as a Junior Web Developer.</p>

                        <p>During my time at Queen's University I have spent time developing projects in several organizations like QUANTT
                            (Queen's University Algorithmic Network & Trading Team) and QWEB (Queen's University Web Development Club) and on my own outside of school.</p>

                        <p>Beyond school and programming I spend most of my time reading, training Brazilian Jiu-Jitsu, or watching MMA.</p>

                        <p>Contact me at 'adlaibridsonboyczuk@gmail.com' or any of the social media above!</p>

                        <p>My resume:</p>
                        <a href="#">Resume</a>
                    </div>

                    <div className='skills'>
                        <h3>Skills</h3>
                        <p>Languages: Python, JavaScript, Typescript, Java, C, Bash, x86 Assembly,</p>
                        <p>Frameworks: HTML/CSS, jQuery, Node.js, Express.js, React, Flask, Unity</p>
                        <p>Technologies: MongoDB, MySQL, pandas, NumPy, Pytest, Linux, Excel, Git, Docker, VS Code, NetBeans, Eclipse</p>
                    </div>

                    <div className='courses'>
                        <h3>Courses</h3>
                        <p>Algorithms
                            Data Structures
                            Artificial Intelligence
                            Neural & Genetic Computing
                            Operating Systems
                            Software Quality Assurance
                            Software Architecture
                            Functional Programming</p>
                    </div>

                    <div className='project'>
                        <h3>Projects</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage;