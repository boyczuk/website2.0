import './Home.css';
import resume from '../assets/Adlai_Resume.pdf';
import me from '../assets/me.jpg';
import me2 from '../assets/me2.jpg';
import me3 from '../assets/me3.jpg';
import me5 from '../assets/me5.jpg';

function Recipes() {
    return (
        <div className='container'>
            <div className='content'>
                <div className='sections'>
                    <div className='title'>Recipes</div>
                    <div className='smaller-sec'>

                        <div id="projects" className='project'>
                            <h3>Meat</h3>
                            <p className="project-boxes">

                                <b><a href="/PorkKatsudon" className="clickable-link" target="_blank">
                                    Pork Katsudon</a></b>
                                <li>
                                    Crispy fried pork cutlets topped on a bed of rice, eggs, onions, and sauce.
                                </li>
                                <b><a href="/BananaRoti" className="clickable-link" target="_blank">
                                    Thai Banana Roti</a></b>
                                <li>
                                    Crispy fried Thai styled Banana pancakes.
                                </li>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Recipes;