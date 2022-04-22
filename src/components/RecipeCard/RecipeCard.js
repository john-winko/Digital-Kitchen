import * as React from 'react';
import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardMedia from "./RecipeCardMedia";
import RecipeCardBody from "./RecipeCardBody";
import RecipeCardAction from "./RecipeCardActions";
import RecipeCardDetails from "./RecipeCardDetails";
import {useEffect} from "react";


export default function RecipeCard({recipe, initialExpand= false}) {
    const [expanded, setExpanded] = React.useState(false);

    useEffect(()=>{
        if (initialExpand){
            setExpanded(true)
        }
    },[initialExpand])

    return (
        <Card mx={"auto"} sx={{ my: "1rem", bgcolor: "#bee8ba", borderRadius:5, boxShadow: 20}}>
            <RecipeCardHeader author={""} name={recipe.name} addDate={recipe.created_at}/>
            <RecipeCardMedia thumbnailUrl={recipe.thumbnail_url} videoUrl={recipe.original_video_url} altText={recipe.name}/>
            <RecipeCardBody nutrition={recipe.nutrition} description={recipe.description} tags={recipe.tags}/>
            <RecipeCardAction {...{expanded, setExpanded, recipe}} />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <RecipeCardDetails/>
            </Collapse>
        </Card>
    )
}