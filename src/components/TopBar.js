import {Link} from "react-router-dom";
import {ShowLoginLogout} from "../components/Login";
import {AppBar, Box, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";


function TopBar() {

    return (
        <AppBar position={"static"} className={"AppBar"}>
            <Toolbar>
                <Typography variant={"h4"} mx={2}>
                    <Link to={"/"} className={"sLink"}>
                        Digital Kitchen
                    </Link>
                </Typography>

                {/*TODO add search bar*/}
                <Box sx={{marginLeft: "auto"}} mx={2}>
                    <ShowLoginLogout/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar