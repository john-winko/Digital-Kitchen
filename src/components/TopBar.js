import {Link} from "react-router-dom";
import {ShowLoginLogout} from "../components/Login";
import {AppBar, Box, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import './TopBar.css';


function TopBar() {

    return (
        <AppBar position={"static"} >
            <Toolbar>
                <Typography variant={"h4"} mx={2}>
                    <Link to={"/"} className={"sLink"}>
                        Digital Kitchen
                    </Link>
                </Typography>
                <Typography variant={"body1"} mx={2}>
                    <Link to={"/home"} className={"sLink"}>
                        Home
                    </Link>
                </Typography>
                <Typography variant={"body1"} mx={2}>
                    <Link to={"/recipe_list"} className={"sLink"}>
                        Browse Recipes
                    </Link>
                </Typography>
                <Box sx={{marginLeft:"auto"}} mx={2}>
                    <ShowLoginLogout/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar