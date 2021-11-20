import React, { useEffect, useState } from "react";
import Recipe from './recipe'
import '../style/style.css'

const RecipeApp = () => {
    const API_ID = 'cb909d78'
    const API_KEY = '8a9be5b65d6ca96a407227f6e71028e0'

    const [search, setSearch] = useState('')
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('')
    const [calorieFrom, setCalorieFrom] = useState('591')
    const [calorieTo, setCalorieTo] = useState('722')
    const [more, setMore] = useState(9)

    useEffect(() => {
        getRecipe()
    }, [query])

    useEffect(() => {
        getRecipe()
    }, [more])

    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=${more}&calories=${calorieFrom}-${calorieTo}&health=alcohol-free`)
        if (response.status === 200) {
            const data = await response.json()
            console.log(data.hits)
            setRecipes(data.hits)
        }
    }

    const getQuery = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }
    return (
        <div className='app'>
            <div className='header'>
                <div className='container'>
                    <form onSubmit={getQuery}>
                        <input className='search-input' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
                        <button className='search-button'>Search</button>
                    </form>
                </div>
            </div>
            <div className='container'>
                {query ? <p className='recipe-title'>Recipes about {query}</p> : <p className='recipe-title'>Have a nice day...</p>}
            </div>
            <div className='container'>
                <Recipe recipes={recipes} />
            </div>
            <div className='container'>
                <button className='see-more' onClick={() => setMore(more + 9)}>See More... ({recipes.length})</button>
            </div>
        </div>
    )
}

export default RecipeApp