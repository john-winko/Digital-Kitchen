import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Grid} from "@mui/material";


export default function Layout() {
    const {token} = useContext(AuthContext)
    return (
        <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"stretch"} spacing={2}>
            <Grid item xs={0}>
                {/*Only show sidebar when they are logged in*/}
                {token && <Sidebar/>}
            </Grid>
            <Grid item xs marginRight={2}>
                <Grid container direction={"column"} alignItems={"stretch"}>
                    <Grid item>
                        <TopBar/>
                    </Grid>
                    <Grid item>
                        <Outlet/>
                    </Grid>
                    <Grid item>
                        <Footer/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}