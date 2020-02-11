import React, {useState} from 'react';
import Recipe from '../src/data/Recipe.json';

const RecipePage = () => {
    const [featuredRecipe, setfeaturedRecipe] = useState(Recipe)

    const {name, image, ingredient, step} = featuredRecipe.recipe[0];

    const ingredientList = ingredient.map((ingredients) =>
        <li key={ingredients.id}>{ingredients.amount} {ingredients.unit ? ingredients.unit + " of" : ingredients.unit} {ingredients.name}</li>
    )

    const stepList = step.map((steps) =>
        <p>{steps.description}</p>
    )

    return (
        <>
            <h1>{name}</h1>
            <img style={{maxWidth: '20%'}} src={image} alt="recipe image"/>
            <div>
                <ul>
                    {ingredientList}
                </ul>
                <h3>Directions:</h3>
                {stepList}
            </div>
        </>
    )
}

export default RecipePage
