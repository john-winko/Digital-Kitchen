import CardContent from "@mui/material/CardContent";
import {CardActionArea, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";

export default function RecipeCardBody({nutrition, description, tags, image_url, altText}) {
    const nutritionContent = () => {
        return (
            <Typography mb={1} textAlign={"center"} variant="body2" color="text.secondary">
                Carbs: {nutrition.carbohydrates} |
                Fiber: {nutrition.fiber} |
                Protein: {nutrition.protein} |
                Fat: {nutrition.fat} |
                Calories: {nutrition.calories} |
                Sugar: {nutrition.sugar}
            </Typography>
        )
    }

    return (
        <CardContent >
            <div style={{display:"flex", flexDirection:"row"}}>
            <CardActionArea sx={{width:"50%"}}>
                <CardMedia component="img" image={image_url} alt={altText} />
            </CardActionArea>
            <CardActionArea sx={{width:"50%", paddingLeft:"1rem"}}>

            <Typography variant={"body1"} mb={2}>
                {description}
            </Typography>
{/*TODO make a limit on number of tags and have an expander to show more*/}
            {tags && tags.map((tag)=>
                <Chip key={tag.id} label={tag.display_name} variant={"outlined"} sx={{marginLeft: ".5rem"}}/>
            )}
            </CardActionArea>
</div>
            <div>

        </div>

        </CardContent>)
}