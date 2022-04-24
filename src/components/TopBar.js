import {Link} from "react-router-dom";
import {ShowLoginLogout} from "../components/Login";
import {AppBar, Box, Grid, Input, InputAdornment, TextField, Toolbar} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Search} from "@mui/icons-material";


function TopBar() {

    return (

            <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"center"} className={"AppBar"}>
                <Grid item xs={5} marginLeft={15}>
                    <Link to={"/"} className={"sLink"}>
                        Digital Kitchen
                    </Link>
                </Grid>
                <Grid item xs marginLeft={"auto"} marginRight={"auto"}>
                    <Input
                        fullWidth
                               className={'textLight'}
                               placeholder={"Search for recipes by ingredient"}
                        endAdornment={
                        <InputAdornment position={"end"}>

                    <IconButton>
                        <Search/>
                    </IconButton>
                        </InputAdornment>
                        }
                    />
                </Grid>
                <Grid item xs={3} >
                    <div style={{textAlign:"right"}}>
                    <ShowLoginLogout/></div>
                </Grid>
                {/*<Typography variant={"h4"} mx={2}>*/}
                {/*    */}
                {/*</Typography>*/}
                {/*<Box sx={{marginLeft: "auto"}} mx={2}>*/}
                {/*    */}
                {/*</Box>*/}
            </Grid>

    );
}

export default TopBar