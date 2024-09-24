import React, { useState } from 'react';
import '../Home.css';

const japchaeIngredients = [
    "8 oz sweet potato starch noodles (dangmyeon)",
    "4 oz beef (rib eye or sirloin, cut into thin strips)",
    "3 to 4 fresh shiitake mushrooms (sliced)",
    "1/2 onion (thinly sliced)",
    "1/2 carrot (cut into matchsticks)",
    "1/2 red bell pepper (thinly sliced)",
    "2 to 3 scallions (cut into 2-inch pieces)",
    "1/2 bunch spinach",
    "1 tablespoon soy sauce",
    "1 teaspoon sugar",
    "2 cloves garlic (minced)",
    "1 egg (optional, for garnish)",
    "2 tablespoons sesame oil",
    "2 tablespoons vegetable oil",
    "1 tablespoon sesame seeds",
    "Salt and pepper to taste"
];

function Japchae() {
    const [checkedItems, setCheckedItems] = useState(new Array(japchaeIngredients.length).fill(false));

    const handleCheckboxChange = (index: number) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    return (
        <div className='container'>
            <div className='content'>
                <div className='sections'>
                    <div className='title'>Recipes</div>
                    <div className='smaller-sec'>
                        <div id="projects" className='project'>
                            <h1>Ingredients</h1>
                            <ul>
                                {japchaeIngredients.map((item, index) => (
                                    <li key={index}>
                                        <input
                                            type="checkbox"
                                            className='checkbox'
                                            checked={checkedItems[index]}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                        <span style={{ textDecoration: checkedItems[index] ? 'line-through' : 'none' }}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <h1>Instructions</h1>
                            <ol>
                                <li>1. Boil the noodles according to package instructions. Drain and rinse under cold water. Cut the noodles with scissors into shorter lengths (about 6-7 inches). Toss with 1 teaspoon of sesame oil. Set aside.</li>
                                <br></br><li>2. Blanch the spinach in boiling water for 30 seconds. Rinse under cold water and squeeze out excess water. Season with a pinch of salt and 1/2 teaspoon sesame oil.</li>
                                <br></br><li>3. In a large pan, add a tablespoon of vegetable oil over medium heat. Sauté the beef until cooked through. Set aside. In the same pan, sauté the mushrooms, onion, carrot, and red bell pepper one by one, adding a little salt and pepper to each, until tender.</li>
                                <br></br><li>4. Combine the cooked noodles, beef, vegetables, and spinach in the pan. Add 2 tablespoons of soy sauce, 1 teaspoon sugar, 2 teaspoons sesame oil, and minced garlic. Stir-fry everything together over medium heat for 2-3 minutes, until well mixed.</li>
                                <br></br><li>5. Transfer the japchae to a serving dish. Optionally, garnish with a fried egg cut into thin strips and sesame seeds. Serve warm or at room temperature.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Japchae;
