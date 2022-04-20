import {Link} from "react-router-dom";
import {ShowLoginLogout} from "../components/Login";
import {AppBar, Box, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";


function TopBar() {
    // override the default blue link TODO move this into css
    const linkStyle = {color: 'inherit', textDecoration: 'inherit'}
    const barStyle = {
        backgroundColor: "#555555",
        borderRadius: "0 0 3rem 3rem",
        paddingInline: "2rem",
        zIndex: "1000",
    }

    return (
        <AppBar position={"static"} sx={barStyle}>
            <Toolbar>
                <Typography variant={"h4"} mx={2}>
                    <Link to={"/"} style={linkStyle}>Digital Kitchen </Link>
                </Typography>
                <Typography variant={"body1"} mx={2}>
                    <Link to={"/home"} style={linkStyle}>Home </Link>
                </Typography>
                <Typography variant={"body1"} mx={2}>
                    <Link to={"/recipe_list"} style={linkStyle}>Browse Recipes </Link>
                </Typography>
                <Box sx={{marginLeft:"auto"}} mx={2}>
                    <ShowLoginLogout/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar