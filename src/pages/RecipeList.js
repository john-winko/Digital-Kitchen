import RecipeCard from "../components/RecipeCard/RecipeCard";
import {getRecipeList} from "../utils/useTasty";
import {useContext} from "react";
import {MyCollectionContext} from "../context/MyCollection";


export default function RecipeList() {
    // TODO getting called multiple times... need to fix to not kill api request limit


    return (
        <div className={"d-flex flex-column "} style={{marginRight:"2rem"}}>
            {console.log("keywords")}
            {getRecipeList().map((recipe) =>
                <RecipeCard key={recipe.id} {...{recipe}} />
            )}
        </div>

    )
}
