import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Link} from "react-router-dom";
import {MyCollectionContext} from "../context/MyCollection";

export default function Sidebar() {
    let auth = useContext(AuthContext)
    let {myRecipes} = useContext(MyCollectionContext)
    const [expanded, setExpanded] = useState(true)

    let barStyle = {
        backgroundColor: "lightblue",
        borderRadius: "2rem",
        padding: ".5rem",
        margin: ".5rem"
    }
    if (expanded){
        barStyle = {...barStyle, minWidth: "20vw"}
    }else{
        barStyle = {...barStyle, maxWidth: "2vw"}
    }

    if (!auth.token)
        return <></>

    return (
        <div style={barStyle}>
            <button onClick={()=>setExpanded((isExpanded)=>!isExpanded)}>...</button>
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
                <ul>My Collection
                    {console.log(myRecipes)}
                    {myRecipes.map((recipe)=>{
                        return <li key={recipe.id}>{recipe.recipe.name}</li>
                    })}
                </ul>
            </ul>
        </div>


    )
}