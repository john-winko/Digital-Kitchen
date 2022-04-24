import RecipeCard from "../components/RecipeCard/RecipeCard";
import {useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";
import {Pagination} from "@mui/material";
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export default function RecipeList({favoritesOnly = false}) {
    const [recipeList, setRecipeList] = useState([])
    const [page, setPage] = useState(1)
    const backend = useAxios()

    useEffect(() => {
        if (favoritesOnly) {
            backend.get('/api/v1/user_recipe/').then((res) => {
                const newRecipes = res.data.map((x) => x.recipe)
                console.log("favs", newRecipes)
                setRecipeList(newRecipes)
            })
        } else {
            backend.get('/api/v1/recipe/browse/').then((res) => {
                console.log("browse", res)
                setRecipeList(res.data)
            })
        }
    }, [favoritesOnly])

    return (
        <div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <input type={"search"} name={"query"} placeholder={"Enter search parameter (keyword) here"} style={{width:"50%", marginLeft:"3rem"}}/>
                <IconButton>

                <Search/>
                </IconButton>
                <Pagination count={10} onChange={(e,v)=>console.log(v)} sx={{marginInline:"auto"}}/>
            </div>
            <div className={"d-flex flex-column "} style={{marginInline: "auto", maxWidth: "1100px"}}>
            {console.log("recipe list", recipeList)}
            {recipeList.map((recipe) =>
                <RecipeCard key={recipe.id} {...{recipe}} />
            )}
        </div>
        </div>


    )
}
