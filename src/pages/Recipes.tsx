import './Home.css';

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

                                <b><a href="/PorkKatsudon" className="clickable-link">
                                    Pork Katsudon</a></b>
                                <li>
                                    Crispy fried pork cutlets topped on a bed of rice, eggs, onions, and sauce.
                                </li>
                                <b><a href="/BananaRoti" className="clickable-link">
                                    Thai Banana Roti</a></b>
                                <li>
                                    Crispy fried Thai styled Banana pancakes.
                                </li>
                                <b><a href="/JerkChicken" className="clickable-link">
                                    One-Pot Caribbean Jerk Chicken and Rice</a></b>
                                <li>
                                    A flavorful one-pot dish featuring tender jerk-seasoned chicken cooked with aromatic rice, vegetables, and a hint of coconut.
                                </li>
                                <b><a href="/Japchae" className="clickable-link">
                                    Japchae (잡채)</a></b>
                                <li>
                                    A savory and slightly sweet Korean stir-fried glass noodle dish with vegetables, meat, and a sesame soy sauce seasoning.
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