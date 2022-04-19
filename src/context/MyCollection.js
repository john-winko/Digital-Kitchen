import {createContext, useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";

let MyCollectionContext = createContext({})

function MyCollectionProvider({children}) {
    const backend = useAxios()

    const [myRecipes, setMyRecipes] = useState([])


    const toggleFavorite = (recipeID) => {
        // TODO push to backend
        if (isFavorite(recipeID)) {
            let filtered = myRecipes.filter(x => x !== recipeID)
            setMyRecipes(filtered)
            console.log(`removed ${recipeID}`, filtered)
        } else {
            let newFav = [...myRecipes]
            newFav.push(recipeID)
            setMyRecipes(newFav)
            console.log(`added ${recipeID}`, newFav)
        }
    }

    const isFavorite = (recipeID) => {
        for (let recipe of myRecipes) {
            if (recipe === recipeID) {
                return true
            }
        }
        return false
    }

    useEffect(() => {
        const getFavorites = async () => {
            const response = backend.get('/api/v1/user_recipe/')
            console.log("resp fav", response)
            if (response.status === 200) {
                return response.data
            }
            return []
        }
        getFavorites().then()
    }, [toggleFavorite])


    let contextData = {myRecipes, setMyRecipes, toggleFavorite, isFavorite}

    return <MyCollectionContext.Provider value={contextData}>{children}</MyCollectionContext.Provider>
}

export {MyCollectionProvider, MyCollectionContext}