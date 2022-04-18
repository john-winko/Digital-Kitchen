import {Card} from "@mui/material";
import getRecipeList from "../utils/useTasty";


export default function RecipeList(){

    const RecipeItem = () => {
        return(
            <Card>

            </Card>
        )
    }
    return(
        <div>
            <ul>
            {getRecipeList().map((item)=>{
                return (<li key={item.id}>{item.name}</li>)
            })}
            </ul>
        </div>
    )
}
