import Card from '@mui/material/Card';
import Collapse from '@mui/material/Collapse';
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardBody from "./RecipeCardBody";
import RecipeCardDetails from "./RecipeCardDetails";
import {useContext, useEffect, useState} from "react";
import {MyCollectionContext} from "../../context/MyCollection";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeCard({recipe, initialExpand = false}) {
    const [expanded, setExpanded] = useState(false);

    const {toggleFavorite, isFavorite} = useContext(MyCollectionContext)

    const recipeJSON = JSON.stringify(recipe.raw)

    useEffect(() => {
        if (initialExpand) {
            setExpanded(true)
        }
    }, [initialExpand])

    return (
        <Card mx={"auto"} sx={{my: "1rem", bgcolor: "#bee8ba", borderRadius: 5, boxShadow: 20}}>
            <RecipeCardHeader name={recipe.name} isFavorite={isFavorite(recipe.id)}
                              toggleFavorite={() => toggleFavorite(recipe.id)}/>
            <RecipeCardBody
                nutrition={recipe.nutrition}
                description={recipe.description}
                image_url={recipe.image_url}
                altText={recipe.name}
                tags={recipe.raw?.tags}
                recipeJSON={recipeJSON}
            />
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <RecipeCardDetails ingredients={recipe.ingredients} steps={recipe.recipe_steps}/>
            </Collapse>
        </Card>
    )
}