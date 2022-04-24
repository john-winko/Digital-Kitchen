import CardContent from "@mui/material/CardContent";
import {CardActionArea, Chip} from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import {useContext} from "react";
import {MyCollectionContext} from "../../context/MyCollection";
import KeywordChip from "./KeywordChip";

export default function RecipeCardBody({nutrition, description, tags, image_url, altText, recipeJSON}) {
    const {keywords} = useContext(MyCollectionContext)

    const NutritionContent = () => {
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
        <CardContent>
            <div style={{display: "flex", flexDirection: "row"}}>
                <CardActionArea sx={{width: "70%"}}>
                    <CardMedia component="img" image={image_url} alt={altText}
                               sx={{maxHeight: "400px", marginBottom: "1rem"}}/>

                    {nutrition && <NutritionContent/>}
                </CardActionArea>
                <div style={{width: "30%", paddingLeft: "1rem"}}>
                    {keywords.map((keyword) =>
                        <KeywordChip key={keyword.id} keyword={keyword} recipeJSON={recipeJSON}/>
                    )}
                    {/*Limiting to 10 tags, TODO add a state for how many to show*/}
                    {tags && tags.slice(0, 10).map((tag) =>
                        <Chip key={tag.id} label={tag.display_name} variant={"outlined"} sx={{marginLeft: ".5rem"}}/>
                    )}
                </div>
            </div>
            <div>
                <Typography variant={"body1"}>
                    {description}
                </Typography>
            </div>

        </CardContent>)
}