import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {Chip, Typography} from "@mui/material";
import {useContext} from "react";
import {MyCollectionContext} from "../../context/MyCollection";

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

// TODO maybe add a timer and remove item from list once added to collections?

export default function RecipeCardAction({expanded, setExpanded, recipe}) {
    const {toggleFavorite, keywords, isFavorite} = useContext(MyCollectionContext)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const recipeJSON = JSON.stringify(recipe)

    const renderChip = (keyword) =>{
        let instances =  (recipeJSON.match(new RegExp(keyword.keyword, 'ig')) || []).length
        // TODO refactor out for reusability / themeing
        let color = "#2f6e70"
        if (keyword.acceptability >= 0){
           color = "#45b405"
        } if (keyword.acceptability <= 0){
            color = "#b9b200"
        }  if (keyword.acceptability < -5){
            color = "#c01a1a"
        }
        if (instances){
            return <Chip key={keyword.id} label={keyword.keyword} color={"primary"}
                         style={{backgroundColor:color, marginInline:".5rem"}}/>
        }
        return null
    }

    return (
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={()=>toggleFavorite(recipe)}>
                <FavoriteIcon sx={isFavorite(recipe) ? {color:"red"} : null}/>
            </IconButton>
            {isFavorite(recipe) ? <Typography>Added to my collection</Typography>:null}
            <IconButton>
                <ArrowUpwardOutlinedIcon/>4
            </IconButton>
            <IconButton>
                <ArrowDownwardOutlinedIcon/>0
            </IconButton>
            {keywords.map((keyword)=>renderChip(keyword))}
            {/*<Chip label="Label" color="success"/>*/}
            {/*<Chip label="Label" color="error"/>*/}
            <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon/>
            </ExpandMore>
        </CardActions>)
}