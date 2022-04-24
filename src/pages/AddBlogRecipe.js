import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Grid, Input, InputAdornment, LinearProgress} from "@mui/material";
import {useAxios} from "../utils/useAxios";
import {useState} from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";

export default function AddBlogRecipe() {
    const backend = useAxios()
    const [recipe, setRecipe] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const parseWebsite = (e) => {
        setIsLoading(true)
        e.preventDefault()
        backend.post('/api/parseUrl/', {"url": e.target.url.value})
            .then((res) => {
                if (res.status === 200) {
                    setRecipe(res.data)
                } else {
                    console.log("api error", res)
                }
                setIsLoading(false)
            })
    }

    return (
        <Grid container direction={"column"} className={"addBlogRecip"}>
            <Grid item>
                <Grid container direction={"row"} justifyContent={"center"}>
                    <Grid item xs={1} md={3}/>
                    <Grid item xs>
                        <form onSubmit={parseWebsite}>
                            <Input
                                fullWidth
                                type="search"
                                name="url"
                                placeholder="Enter website url"
                                endAdornment={
                                    <InputAdornment position={"end"}>
                                        <IconButton type="submit" aria-label="search">
                                            <SearchIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </form>
                    </Grid>
                    <Grid item xs={1} md={3}/>
                </Grid>
            </Grid>
            {isLoading ? <LinearProgress /> :
                <Grid item>
                    {recipe && <RecipeCard recipe={recipe} initialExpand={true}/>}
                </Grid>
            }
        </Grid>
    )
}