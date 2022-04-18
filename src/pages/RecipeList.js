import RecipeCard from "../components/RecipeCard/RecipeCard";
import {getRecipeList} from "../utils/useTasty";


export default function RecipeList() {

    return (
        <div className={"d-flex flex-column mx-auto"}>
            {getRecipeList().map((recipe)=><RecipeCard key={recipe.id} recipe={recipe}/>)}
        </div>

    )
}
