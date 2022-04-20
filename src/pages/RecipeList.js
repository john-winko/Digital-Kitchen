import RecipeCard from "../components/RecipeCard/RecipeCard";
import {getRecipeList} from "../utils/useTasty";
import {useContext} from "react";
import {MyCollectionContext} from "../context/MyCollection";


export default function RecipeList() {
    const {toggleFavorite, myRecipes, isFavorite} = useContext(MyCollectionContext)

    return (
        <div className={"d-flex flex-column "} style={{marginRight:"2rem"}}>
            {getRecipeList().map((recipe) =>
                <RecipeCard key={recipe.id} {...{recipe, toggleFavorite}} isFavorite={isFavorite(recipe)} />
            )}
        </div>

    )
}
