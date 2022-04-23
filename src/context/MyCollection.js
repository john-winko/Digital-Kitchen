import {createContext, useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";

let MyCollectionContext = createContext({})

function MyCollectionProvider({children}) {

    const backend = useAxios()
    const [dirty, setDirty] = useState(true)
    const [myRecipes, setMyRecipes] = useState([])
    const [keywords, setKeywords] = useState([])

    const toggleFavorite = (recipeID) => {
        let favorite = isFavorite(recipeID)
        if (favorite) {
            backend.delete(`/api/v1/user_recipe/${favorite.id}/`)
                .then(() => {// TODO add a toast w/ undo
                    setDirty(true)
                })

        } else {
            // let params = {"name": recipe.name, "recipe": recipe}
            backend.post('/api/v1/user_recipe/', {"recipeID":recipeID})
                .then((newRecipe) => {// TODO add a toast w/ undo
                    setDirty(true)
                })
        }
    }

    const isFavorite = (recipeID) => {
        // TODO funky naming after refactor... comparing the recipe json from tasty by id to the database recipes which has a json field that contains an id
        for (let myRecipe of myRecipes) {
            if (myRecipe.recipe.id === recipeID) {
                return myRecipe
            }
        }
        return null
    }

    useEffect(() => {
        if (dirty) {
            // console.log("dirty")
            backend.get('/api/v1/user_recipe/')
                .then((response) => {
                    if (response.status === 200) {
                        setMyRecipes(response.data)
                    }
                })
            backend.get('/api/v1/keyword/')
                .then((response)=>{
                    if (response.status === 200){
                        setKeywords(response.data)
                    }
                })
            // refreshData().then()
        }
        setDirty(false)
// adding toggleFavorite dependency is infinite loop
    }, [dirty, backend])


    let contextData = {myRecipes, setMyRecipes, toggleFavorite, isFavorite, keywords, setKeywords}

    return <MyCollectionContext.Provider value={contextData}>{ children}</MyCollectionContext.Provider>
}

export {MyCollectionProvider, MyCollectionContext}