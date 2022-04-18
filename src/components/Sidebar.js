import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";

export default function Sidebar() {
    let auth = useContext(AuthContext)

    if (!auth.user)
        return <></>

    return (
            <div style={{backgroundColor: "lightblue", top:0, bottom:0, width: "20vw"}}>
                <ul>Sett
                    <ul>Preferences
                        <li>Keyword (blacklist)</li>
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