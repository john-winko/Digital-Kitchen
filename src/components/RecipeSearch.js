import {Input, InputAdornment} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Close, Search} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";

export default function RecipeSearch() {
    const navigate = useNavigate()
    const searchForm = useRef()
    const [searchValue, setSearchValue] = useState("")

    const doSearch = (e) => {
        e.preventDefault()
        navigate(`/recipe_list/${searchValue}`)
    }

    return (
        <form onSubmit={doSearch} ref={searchForm}>
            <Input
                fullWidth
                placeholder={"Search for recipes by ingredient"}
                name={"search"}
                onChange={(e) => setSearchValue(e.target.value)}
                endAdornment={
                    <InputAdornment position={"end"}>
                        {/*Only show clear button if text was entered*/}
                        {searchValue === "" ? null :
                            <IconButton onClick={() => searchForm.current.reset()}>
                                <Close/>
                            </IconButton>
                        }
                        <IconButton type={"submit"}>
                            <Search/>
                        </IconButton>
                    </InputAdornment>
                }
            />
        </form>
    )
}