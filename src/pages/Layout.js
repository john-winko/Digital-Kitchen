import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";


export default function Layout() {
    const {token} = useContext(AuthContext)
    return (
        <div>
            <Sidebar/>
            <div style={{marginLeft: token? "300px":"0px"}}>
                <div style={{height:"100vh"}}>
                    <TopBar/>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </div>

    )
}