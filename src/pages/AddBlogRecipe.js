import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {TextField} from "@mui/material";
import {useAxios} from "../utils/useAxios";

export default function AddBlogRecipe() {
    const backend = useAxios()

    const parseWebsite = (e) => {
        e.preventDefault()
        console.log(e.target.url.value)
        backend.post('/api/parseUrl/', {"url":e.target.url.value})
            .then((res)=>{
                console.log(res.data)
        })
    }

    return (
        <div style={{marginInline: "auto"}}>
            <h1 style={{textAlign: "center"}}>Adding a blog recipe</h1>
                <form onSubmit={parseWebsite} >
                    <TextField
                        sx={{width:"80%", backgroundColor:"white"}}
                        type="search"
                        name="url"
                        placeholder="Enter website url"
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon/>

                    </IconButton>
                </form>
            <hr/>
            <div>
                Results
            </div>
        </div>
    )
}