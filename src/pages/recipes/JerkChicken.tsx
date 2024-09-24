import React, { useState } from 'react';
import '../Home.css';

const jerkChickenIngredients = [
    "4 - 6 chicken thighs (bone-in, skinless)",
    "1-2 tablespoons jerk seasoning (store-bought or homemade)",
    "2 cups long-grain rice",
    "1 medium onion (chopped)",
    "2 garlic cloves (minced)",
    "1 tablespoon ginger (minced)",
    "1 bell pepper (chopped, any color)",
    "2 teaspoons thyme (dried or fresh)",
    "2 teaspoons paprika",
    "1/2 teaspoon allspice",
    "1-2 teaspoons hot sauce (adjust to taste)",
    "1 can (14 oz) coconut milk",
    "2 cups chicken broth",
    "1 cup green peas",
    "2 green onions (chopped)",
    "1 Scotch bonnet pepper (whole, optional for spice)",
    "Salt and pepper to taste",
    "1 lime (sliced, for garnish)"
];

function JerkChickenRice() {
    const [checkedItems, setCheckedItems] = useState(new Array(jerkChickenIngredients.length).fill(false));

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
                                {jerkChickenIngredients.map((item, index) => (
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
                                <li>1. Season the chicken thighs with salt, pepper, and jerk seasoning. Allow them to marinate for at least 30 minutes (preferably overnight) for maximum flavor.</li>
                                <br></br><li>2. In a large skillet or pot, heat 1-2 tablespoons of oil over medium heat. Brown the chicken on both sides until golden, about 5-7 minutes per side. Remove the chicken and set aside.</li>
                                <br></br><li>3. In the same pot, sauté the onions, garlic, ginger, and bell pepper for 2-3 minutes until softened.</li>
                                <br></br><li>4. Add thyme, paprika, and allspice. Stir in the rice and cook for 1-2 minutes, allowing it to soak up the flavors.</li>
                                <br></br><li>5. Pour in the coconut milk, chicken broth, and hot sauce. Mix well, then return the chicken thighs to the pot. Add the Scotch bonnet pepper if using.</li>
                                <br></br><li>6. Bring to a boil, then reduce to a simmer. Cover and cook for 20-25 minutes, until the rice is tender and the chicken is cooked through. Add the green peas and cook for an additional 5 minutes.</li>
                                <br></br><li>7. Remove the Scotch bonnet pepper, if used, and adjust seasoning with salt and pepper. Garnish with green onions and lime slices before serving.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JerkChickenRice;
