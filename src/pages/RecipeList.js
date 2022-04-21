import RecipeCard from "../components/RecipeCard/RecipeCard";
import {getRecipeList} from "../utils/useTasty";

export default function RecipeList() {
    return (
        <div className={"d-flex flex-column "} style={{marginInline:"auto", maxWidth:"1100px"}}>
            {getRecipeList().map((recipe) =>
                <RecipeCard key={recipe.id} {...{recipe}} />
            )}
        </div>

    )
}
