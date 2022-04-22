import {IconButton, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {AnchorOutlined, Delete} from "@mui/icons-material";

export default function MealPlanItem({mealPlan, deleteMeal}) {

    return (
        <ListItem>
            <IconButton onClick={()=>deleteMeal(mealPlan.id)}>
                <Delete/>
            </IconButton>
            <ListItemText
                primary={`${mealPlan.user_recipe.recipe.name}`}
                secondary={`${mealPlan.meal_date} - ${mealPlan.meal_type}`}/>
{/*TODO change numbers to text interpolation of the meal type*/}
        </ListItem>

    )
}