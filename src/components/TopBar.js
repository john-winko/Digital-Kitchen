import {Link} from "react-router-dom";
import {ShowLoginLogout} from "../components/Login";
import {Grid} from "@mui/material";
import RecipeSearch from "./RecipeSearch";

export default function TopBar() {
    return (
        <Grid container
              direction={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}
              className={"AppBar"}>
            <Grid item xs={5} marginLeft={15}>
                <Link to={"/"} className={"sLink"}>
                    Digital Kitchen
                </Link>
            </Grid>
            <Grid item xs marginLeft={"auto"} marginRight={"auto"}>
                <RecipeSearch />
            </Grid>
            <Grid item xs={3}>
                <div className={"rightGrid"}>
                    <ShowLoginLogout/>
                </div>
            </Grid>
        </Grid>
    );
}