import { useState } from 'react';
import '../Home.css';

const ingredients = [
    "Salt",
    "Sweetened condensed milk",
    "Egg, large",
    "Water",
    "All-purpose flour",
    "Unsalted butter, room temperature for dough",
    "Melted unsalted butter, for coating dough balls",
    "Neutral flavoured oil",
    "Toppings: Banana (tiny hint of green on skin), Nutella or chocolate sauce, or Granulated Sugar",
];

function BananaRoti() {
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
                                <h2>To make the dough:</h2>
                                <li>1. In a large mixing bowl, combine salt and water and whisk until salt is dissolved. Add condensed milk and egg, whisk until combined.</li>
                                <li><br></br>2. In another bowl, add flour and butter, and use your fingers to rub butter it into flour until no more big chunks are visible.</li>
                                <li><br></br>3. Add flour-butter mixture to the water mixture and knead with your hands quickly just until all the dry flour has been absorbed. It'll look like a really shaggy, rough dough. Cover bowl with a damp cloth or plastic wrap and let rest for 15 - 30 minutes. (This resting step, called autolyse, is optional, but it will allow water to absorb into the flour and will reduce the total kneading time you need over all.)</li>
                                <li><br></br>4. Once dough has rested, transfer onto a clean work surface and continue kneading with your hands for about 5 minutes. It will feel too moist at first, but it should feel drier after a few minutes. If after a few minutes of kneading the dough is still sticking to your hands, add a little bit of extra flour and knead it in. When you're done kneading, the dough won't be super smooth. In fact, the dough may seem a little bit rough on the surface; this is okay as long as the texture and moistness of the dough is even all throughout. The dough should be quite moist and may feel tacky, but it shouldn't stick to your hands.</li>
                                <li><br></br>5. Once the dough is kneaded, let rest for another 10-15 minutes to relax the gluten. This step is also optional, but it will make it easier for you to separate the dough into portions.</li>
                                <li><br></br>6. While dough is resting, mix together the melted butter and oil for coating dough balls.</li>
                                <li><br></br>7. Stretch dough into a log, then cut into 80g pieces (you will get about 11 pieces total). Note: 80g dough balls is for roti made in a 12-inch pan.</li>
                                <li><br></br>8. Form each dough piece into a ball by pinching the edges together towards the centre (see video for technique). Doesn’t have to be perfect, but you want it to be round.</li>
                                <li><br></br>9. Brush the butter/oil mixture on the bottom of the container you’re using to store dough balls. Then brush each dough ball generously with butter mixture and place into container.</li>
                                <li><br></br>10. Let the dough rest for at least 3 hours, or you can refrigerate the dough and cook it the next day. If dough is refrigerated, remove from fridge at least 2 hours before using so it can come to room temp. It is very important for the dough to rest and relax the gluten or you'll have a hard time stretching it!</li>

                                <h2>To shape roti:</h2>
                                <li>1. On a clean, lightly oiled work surface, press a dough ball into a flat disk.</li>
                                <li><br></br>2. Grab the edge, one section at a time, and stretch it out as far as it will go without tearing. Press the edge onto the counter so it doesn’t shrink back.</li>
                                <li><br></br>3. Go around the piece stretching until you have a very thin sheet of dough.</li>
                                <li><br></br>4. Use a knife to trim off the very edge of the dough which tends to be thicker.</li>

                                <h2>To cook the roti:</h2>
                                <li>1. Heat a 12-inch flat skillet (or bigger) over medium heat and add just enough oil to coat the bottom. Be on the generous side with oil or you will not get a crisp roti.</li>
                                <li><br></br>2. Add a little piece of dough scrap into the pan as a heat tester, and once it’s bubbling in the oil, you’re ready to cook the dough.</li>
                                <li><br></br>3. Carefully transfer the stretched dough into the pan, trying not to let it fold onto itself during the transfer.</li>
                                <li><br></br>4. Once you've placed the dough, quickly use a spatula to straighten out any edges that have folded.</li>
                                <li><br></br>5. Arrange banana (or whatever filling you're using) in the centre of the dough in a square, about 12-16 slices. Make sure you don’t put too much or you won’t be able to cover it with the dough.</li>
                                <li><br></br>6. Quickly fold the edges of the roti over the banana; don't wait too long before folding or the dough will become stiff and hard to fold.</li>
                                <li><br></br>7. Once the bottom side has browned slightly, flip and brown the other side.</li>
                                <li><br></br>8. Keep flipping it back and forth about every minute or so until both sides are well browned and crispy. Total cooking time should be about 4-5 minutes.</li>
                                <li><br></br>9. If you wish, add a little knob of butter beside the roti, then move the roti to coat it in this melted butter. Let it cook in this butter for about 30 seconds.</li>
                                <li><br></br>10. Transfer roti onto a cutting board and cut into 12-16 pieces.</li>
                                <li><br></br>11. Use a bench scraper to place it onto a serving plate. Let it cool off a bit before eating because the banana is HOT!</li>
                                <li><br></br>12. When ready to eat, drizzle condensed milk (or chocolate sauce) and sprinkle on some granulated sugar. Enjoy!</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BananaRoti;
