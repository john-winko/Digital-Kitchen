import RecipeCard from "../components/RecipeCard/RecipeCard";
import {useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";
import {Pagination} from "@mui/material";
import {Search} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

export default function RecipeList({favoritesOnly = false}) {
    const [recipeList, setRecipeList] = useState([])
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState(null)
    const backend = useAxios()

    useEffect(() => {
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

    const newQuery = (e) =>{
        e.preventDefault()
        console.log(e.target.query.value)
        setQuery(e.target.query.value)
    }

    return (
        <div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <form onSubmit={newQuery} style={{width:"50%", marginLeft:"3rem"}}>
                    <input type={"search"} name={"query"} placeholder={"Enter search parameter (keyword) here"} style={{width:"90%", height:"3rem"}}/>
                    <IconButton type={"submit"}>
                        <Search/>
                    </IconButton>
                </form>
                <Pagination count={10} onChange={(e,v)=>setPage(v)} sx={{marginInline:"auto"}}/>
            </div>
            <div className={"d-flex flex-column "} style={{marginInline: "auto", maxWidth: "1100px"}}>
            {/*{console.log("recipe list", recipeList)}*/}
            {recipeList.map((recipe) =>
                <RecipeCard key={recipe.id} {...{recipe}} />
            )}
        </div>
        </div>


    )
}
