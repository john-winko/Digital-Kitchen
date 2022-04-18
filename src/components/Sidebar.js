import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Link} from "react-router-dom";

export default function Sidebar() {
    let auth = useContext(AuthContext)

    if (!auth.token)
        return <></>

    return (
            <div style={{backgroundColor: "lightblue", minWidth: "20vw", borderRadius:"2rem", padding:".5rem", margin:".5rem"}}>
                <ul>Sett
                    <ul>Preferences
                        <li><Link to={"/keywords"}>Keyword (blacklist)</Link></li>
                    </ul>
                    <li>----------</li>
                    <ul>Meal Planning
                        <li>Weekly</li>
                        <li>Monthly</li>
                    </ul>
                    <li>----------</li>
                    <li>Shopping list</li>
                </ul>
            </div>


    )
}