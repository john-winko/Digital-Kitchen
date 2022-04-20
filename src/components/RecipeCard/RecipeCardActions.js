import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

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

export default function RecipeCardAction({expanded, setExpanded, isFavorite, toggleFavorite, recipe}) {
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={()=>toggleFavorite(recipe)}>
                <FavoriteIcon sx={isFavorite ? {color:"red"} : null}/>
            </IconButton>
            {isFavorite ? <Typography>Added to my collection</Typography>:null}
            <IconButton>
                <ArrowUpwardOutlinedIcon/>4
            </IconButton>
            <IconButton>
                <ArrowDownwardOutlinedIcon/>0
            </IconButton>
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