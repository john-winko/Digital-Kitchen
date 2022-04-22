import RecipeCard from "../components/RecipeCard/RecipeCard";
import {useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";

export default function RecipeList({favoritesOnly = false}) {
    const [recipeList, setRecipeList] = useState([])
    const backend = useAxios()

    useEffect(()=>{
        if (favoritesOnly){
            backend.get('/api/v1/user_recipe/').then((res)=>{
                const newRecipes = res.data.map((x)=>x.recipe.details)
                console.log("favs", newRecipes)
                setRecipeList(newRecipes)
            })
        }else{
            backend.get('/api/v1/recipe/browse/').then((res)=>{
                console.log("browse", res)
                setRecipeList(res.data.results)
            })
        }
    },[favoritesOnly])

    return (
        <div className={"d-flex flex-column "} style={{marginInline:"auto", maxWidth:"1100px"}}>
            {recipeList.map((recipe) =>
                <RecipeCard key={recipe.id} {...{recipe}} />
            )}
        </div>

    )
}
