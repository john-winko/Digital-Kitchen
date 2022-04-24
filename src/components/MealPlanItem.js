import {IconButton, ListItem, ListItemText} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {Link} from "react-router-dom";

export default function MealPlanItem({mealPlan, deleteMeal}) {

    const mealTypeText = (mealType) => {
        switch (mealType) {
            case 1:
                return "Breakfast";
            case 2:
                return "Lunch";
            case 3:
                return "Dinner";
            case 4:
                return "Snack";
            case 5:
                return "Brunch";
            default:
                return "unknown";
        }
    }

    return (
        <ListItem>
            <IconButton onClick={() => deleteMeal(mealPlan.id)}>
                <Delete/>
            </IconButton>
            <ListItemText
                primary={
                    <Link to={`/recipe/${mealPlan.user_recipe.id}`}>
                        {mealPlan.user_recipe.recipe.name}
                    </Link>}
                secondary={`${mealPlan.meal_date} - ${mealTypeText(mealPlan.meal_type)}`}
            />
        </ListItem>

    )
}