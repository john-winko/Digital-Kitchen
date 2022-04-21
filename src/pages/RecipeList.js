import RecipeCard from "../components/RecipeCard/RecipeCard";
import {getRecipeList} from "../utils/useTasty";
import {logDOM} from "@testing-library/react";

export default function RecipeList() {
    return (
        <div className={"d-flex flex-column "} style={{marginRight:"2rem"}}>
            {console.log("render recipe list")}
            {getRecipeList().map((recipe) =>
                <RecipeCard key={recipe.id} {...{recipe}} />
            )}
        </div>

    )
}
