import {IconButton, List, ListItem} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ParsedRecipe({recipe}) {

    const saveRecipe = () => {

    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {recipe.name}
                <IconButton><FavoriteIcon/></IconButton>
            </h1>
            <p>{recipe.description}</p>
            <div style={{display: "flex", flexDirection: "row"}}>
                <img src={recipe.images?.length && recipe.images[0]} style={{width: "50%"}}/>
                <List>
                    {recipe.ingredients?.map((x, index) => <ListItem key={index}>{x}</ListItem>)}
                </List>
            </div>
            <ol>
                {recipe.instructions[0].steps.map((step,i)=><li key={i}>{step}</li>)}
            </ol>
        </div>
    )
}