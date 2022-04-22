import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";
import RecipeCard from "../components/RecipeCard/RecipeCard";

export default function SingleRecipe(){
    const params = useParams()
    const [recipe, setRecipe] = useState(null)
    const backend = useAxios()

    useEffect(()=>{
            backend.get(`/api/v1/user_recipe/${params.id}`).then((res)=>{
                setRecipe(res.data.recipe.details)
                console.log("params", res.data.recipe.details)
            })
    },[params])

    return (
    <>
        {recipe && <RecipeCard recipe={recipe} initialExpand/>}
    </>
    )
}