import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";


export default function Layout() {
    return (
        <div style={{height: "100vh"}}>
            <TopBar/>
            <div style={{display: "flex", flexDirection: "row", height: "90%"}}>
                <Sidebar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}