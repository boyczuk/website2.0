import React, { useState } from 'react';
import '../Home.css';
import resume from '../assets/Adlai_Resume.pdf';
import me from '../assets/me.jpg';
import me2 from '../assets/me2.jpg';
import me3 from '../assets/me3.jpg';
import me5 from '../assets/me5.jpg';

const ingredients = [
    "2 center-cut (boneless pork chops, pounded down to a centimeter thick)",
    "salt and pepper",
    "flour (for dusting)",
    "1 egg",
    "1 cup panko",
    "oil (for frying)",
    "1/2 cup dashi stock or chicken stock",
    "2 teaspoons sugar",
    "1 tablespoon soy sauce",
    "2 teaspoons Mirin",
    "2 large eggs",
    "1 medium onion (thinly sliced)",
    "2 servings steamed white rice",
    "1 scallion (chopped)"
];

function PorkKatsudon() {
    const [checkedItems, setCheckedItems] = useState(new Array(ingredients.length).fill(false));

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
                                {ingredients.map((item, index) => (
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
                                <li>1. Season the pounded pork chops with salt and pepper, and dust with a light, even coating of flour. In one shallow bowl, beat the egg. Put the panko into another shallow bowl.</li>
                                <br></br><li>2. Add thin, even layer of oil to a cast iron pan or skillet over medium heat. The oil is ready when you throw a panko breadcrumb into the oil and it sizzles. Dip the pork into the egg to coat. Transfer the pork to the panko and press it evenly into the meat to get a good coating.</li>
                                <br></br><li>3. Carefully lay the pork chops in the hot oil and cook for 5-6 minutes on one side, until golden brown. Flip and cook the other side for another 5-6 minutes. Drain on a plate lined with a paper towel.</li>
                                <br></br><li>4.While the pork is resting, add the stock, sugar, soy sauce, and Mirin to a small bowl. In another bowl, lightly beat 2 eggs. Add a tablespoon of oil to a pan over medium heat, and add the sliced onion. Fry the onions until they’re translucent and slightly caramelized.</li>
                                <br></br><li>5. Pour the stock mixture over the onions. Slice your tonkatsu into pieces and place on top of the onions. Drizzle the egg over everything. Cook over medium low heat until the egg is just set. Serve over bowls of steamed rice, and garnish with scallions.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PorkKatsudon;
