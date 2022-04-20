import {createContext, useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";

let MyCollectionContext = createContext({})

function MyCollectionProvider({children}) {
    const backend = useAxios()
    const [dirty, setDirty] = useState(true)
    const [myRecipes, setMyRecipes] = useState([])


    const toggleFavorite = (recipe) => {
        let favorite = isFavorite(recipe)
        if (favorite) {
            backend.delete(`/api/v1/user_recipe/${favorite.id}/`)
                .then(() => {// TODO add a toast w/ undo
                    setDirty(true)
                })

        } else {
            let params = {"name": recipe.name, "recipe": recipe}
            backend.post('/api/v1/user_recipe/', params)
                .then((newRecipe) => {// TODO add a toast w/ undo
                    setDirty(true)
                })
        }
    }

    const isFavorite = (recipeID) => {
        // TODO funky naming after refactor... comparing the recipe json from tasty by id to the database recipes which has a json field that contains an id
        for (let recipe of myRecipes) {
            if (recipe.recipe.details.id === recipeID.id) {
                return recipe
            }
        }
        return null
    }

    useEffect(() => {
        if (dirty) {
            backend.get('/api/v1/user_recipe/')
                .then((response) => {
                    if (response.status === 200) {
                        setMyRecipes(response.data)
                    }
                })
        }
        setDirty(false)
// adding toggleFavorite dependency is infinite loop
    }, [dirty])


    let contextData = {myRecipes, setMyRecipes, toggleFavorite, isFavorite}

    return <MyCollectionContext.Provider value={contextData}>{children}</MyCollectionContext.Provider>
}

export {MyCollectionProvider, MyCollectionContext}