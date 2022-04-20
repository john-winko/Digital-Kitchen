import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import {Grid} from "@mui/material";


export default function Layout() {
    return (
        // TODO add some useState for varying width
        <div>
            <Sidebar/>
            <div style={{marginLeft:"300px"}}>
                <div style={{height:"100vh"}}>
                    <TopBar/>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </div>

    )
}