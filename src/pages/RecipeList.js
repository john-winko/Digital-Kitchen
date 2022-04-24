import RecipeCard from "../components/RecipeCard/RecipeCard";
import {useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";
import {Grid, LinearProgress, Pagination} from "@mui/material";
import {useParams} from "react-router-dom";

export default function RecipeList({favoritesOnly = false}) {
    const {query} = useParams()
    const [recipeList, setRecipeList] = useState([])
    const [page, setPage] = useState(1)
    const [maxPages, setMaxPages] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const backend = useAxios()


    useEffect(() => {
        setIsLoading(true)
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
                setIsLoading(false)
            })
        } else {
            backend.get('/api/v1/recipe/browse/', {params: params}).then((res) => {
                console.log("browse", res)
                setRecipeList(res.data.results)
                setPage(res.data.page)
                setMaxPages(parseInt(res.data.count / 20))
                setIsLoading(false)
            })
        }
    }, [favoritesOnly, page, query])

    const Content = () => {
        return (

            <Grid container direction={"column"}>
                {/*Will have to create another route for paginating saved recipes*/}
                {!favoritesOnly &&
                    <Grid item className={"paginate"}>
                        <Pagination count={maxPages}
                                    onChange={(e, v) => setPage(v)}
                                    size={"large"}
                                    page={page}
                                    color={"secondary"}
                        />
                    </Grid>
                }
                <Grid item>
                    {recipeList.map((recipe) =>
                        <RecipeCard key={recipe.id} {...{recipe}} />
                    )}
                </Grid>
            </Grid>
        )
    }

    return isLoading ? <LinearProgress /> : <Content/>
}
