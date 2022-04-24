import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {TextField} from "@mui/material";
import {useAxios} from "../utils/useAxios";
import {useState} from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";

export default function AddBlogRecipe() {
    const backend = useAxios()
    const [recipe, setRecipe] = useState(null)

    const parseWebsite = (e) => {
        e.preventDefault()
        backend.post('/api/parseUrl/', {"url": e.target.url.value})
            .then((res) => {
                if (res.status === 200) {
                    setRecipe(res.data)
                } else {
                    console.log("api error", res)
                }
            })
    }

    return (
        <div style={{marginInline: "auto"}}>
            <form onSubmit={parseWebsite}>
                <TextField
                    sx={{width: "80%", backgroundColor: "white"}}
                    type="search"
                    name="url"
                    placeholder="Enter website url"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon/>
                </IconButton>
            </form>
            <hr/>
            {recipe && <RecipeCard recipe={recipe} initialExpand={true}/>}
        </div>
    )
}