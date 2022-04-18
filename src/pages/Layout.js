import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";


export default function Layout() {
    return (
        <div className={"d-flex flex-column vh-100"}>
            <TopBar/>
            <div className={"flex-grow-1"}>
                <div className={"d-flex flex-row"} style={{height:"100%"}}>
                    <Sidebar/>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}