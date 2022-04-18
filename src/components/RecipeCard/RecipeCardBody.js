import CardContent from "@mui/material/CardContent";
import {Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function RecipeCardBody({nutrition, description, tags}) {
    return (
        <CardContent>
            <Typography mb={1} textAlign={"center"} variant="body2" color="text.secondary">
                Carbs: {nutrition.carbohydrates} |
                Fiber: {nutrition.fiber} |
                Protein: {nutrition.protein} |
                Fat: {nutrition.fat} |
                Calories: {nutrition.calories} |
                Sugar: {nutrition.sugar}
            </Typography>
            <Typography variant={"body1"} mb={2}>
                {description}
            </Typography>

            {tags.map((tag)=>
                <Chip key={tag.id} label={tag.display_name} variant={"outlined"} sx={{marginLeft: ".5rem"}}/>
            )}

        </CardContent>)
}