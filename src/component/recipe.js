import React from 'react'
import '../style/style.css'

const Recipe = ({ recipes }) => {
    return (
        <div className='recipe-list'>
            {
                recipes.map(recipe =>
                    <div className='each-recipe' key={Math.floor(Math.random() * 10000)}>
                        <div>
                            <img className='recipe-img' src={recipe.recipe.image} alt='Recipe' />
                            <h2>{recipe.recipe.label}</h2>
                            <p>Calories: {recipe.recipe.calories}</p>
                            
                            <ol className='recipe-ingredient'>
                                {recipe.recipe.ingredientLines.map((int, index) => <li key={index}>{int}</li>)}
                            </ol>
                        </div>
                        <div>
                            <h4>Meal Type: {recipe.recipe.mealType[0]}</h4>
                            <h4>Total Time: {recipe.recipe.totalTime} min's</h4>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Recipe