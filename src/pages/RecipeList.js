import RecipeCard from "../components/RecipeCard/RecipeCard";
import {useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";
import {Grid, Pagination} from "@mui/material";
import {useParams} from "react-router-dom";

export default function RecipeList({favoritesOnly = false}) {
    const {query} = useParams()
    const [recipeList, setRecipeList] = useState([])
    const [page, setPage] = useState(1)
    const backend = useAxios()


    useEffect(() => {
        console.log("query", query)
        const params = {
            "page": page,
            "query": query
        }
        if (favoritesOnly) {
            backend.get('/api/v1/user_recipe/', {params: params}).then((res) => {
                const newRecipes = res.data.map((x) => x.recipe)
                console.log("favs", newRecipes)
                setRecipeList(newRecipes)
            })
        } else {
            backend.get('/api/v1/recipe/browse/', {params: params}).then((res) => {
                console.log("browse", res)
                setRecipeList(res.data)
            })
        }
    }, [favoritesOnly, page, query])

    return (
        <Grid container direction={"column"}>

            <Grid item className={"paginate"}>
                <Pagination count={10}
                            onChange={(e, v) => setPage(v)}
                            size={"large"}
                            color={"secondary"}
                />
            </Grid>
            <Grid item>
                {recipeList.map((recipe) =>
                    <RecipeCard key={recipe.id} {...{recipe}} />
                )}
            </Grid>
        </Grid>
    )
}
