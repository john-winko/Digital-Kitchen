import * as React from 'react';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardMedia from "./RecipeCardMedia";
import RecipeCardBody from "./RecipeCardBody";
import RecipeCardAction from "./RecipeCardActions";
import RecipeCardDetails from "./RecipeCardDetails";


export default function RecipeCard({recipe}) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Card mx={"auto"} sx={{maxWidth: "90%",minWidth:"90%", mx: "auto", my: "1rem", bgcolor: "lightGreen", boxShadow: 20}}>
            <RecipeCardHeader author={""} name={recipe.name} addDate={recipe.created_at}/>
            <RecipeCardMedia thumbnailUrl={recipe.thumbnail_url} videoUrl={recipe.original_video_url} altText={recipe.name}/>
            <RecipeCardBody nutrition={recipe.nutrition} description={recipe.description} tags={recipe.tags}/>
            <RecipeCardAction expanded={expanded} setExpanded={setExpanded}/>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <RecipeCardDetails/>
            </Collapse>
        </Card>
    )
}