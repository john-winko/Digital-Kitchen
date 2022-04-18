import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import {Chip, List, ListItem} from "@mui/material";
import RecipeCardHeader from "./RecipeCardHeader";

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

export default function RecipeCard({recipe}) {
    const [expanded, setExpanded] = React.useState(false);
    console.log("recipe", recipe)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{maxWidth: "90%",minWidth:"90%", marginX: "auto", marginY: "1rem", backgroundColor: "lightGreen", boxShadow: 20}}>
            {/*<CardHeader*/}
            {/*    avatar={*/}
            {/*        <Avatar sx={{bgcolor: "red"}} aria-label={"recipes"}>*/}
            {/*            R*/}
            {/*        </Avatar>*/}
            {/*    }*/}
            {/*    action={*/}
            {/*        <IconButton aria-label={"settings"}>*/}
            {/*            <MoreVertIcon/>*/}
            {/*        </IconButton>*/}
            {/*    }*/}
            {/*    title={"A long recipe name list"}*/}
            {/*    // TODO add credits*/}
            {/*    subheader={"September 14, 2016"}*/}
            {/*/>*/}
            <RecipeCardHeader author={""} name={recipe.name} addDate={recipe.created_at}/>
            <CardMedia
                component="img"
                height="250"
                image="https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/recipes/b97a62701f254d4c8b1f09f409dbfba1.jpeg"
                alt="Paella dish"
            />
            <CardContent>
                <Chip label={"Text here"} variant={"outlined"} sx={{marginLeft:".5rem"}}/>
                <Chip label={"Text here"} variant={"outlined"}/>
                <Chip label={"Text here"} variant={"outlined"}/>
                <Chip label={"Text here"} variant={"outlined"}/>
                <Chip label={"Text here"} variant={"outlined"}/>
                <Chip label={"Text here"} variant={"outlined"}/>
                <Chip label={"Text here"} variant={"outlined"}/>
                <Chip label={"Text here"} variant={"outlined"}/>
                <Chip label={"Text here"} variant={"outlined"}/>
                <Typography variant="body2" color="text.secondary">
                    Servings: 4 |
                    Carbs: 23 |
                    Fiber: 6 |
                    Protein: 7 |
                    Fat: 11 |
                    Calories: 206 |
                    Sugar: 5
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon/>
                </IconButton>
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
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div className={"d-flex flex-row"}>

                        <List sx={{width:"40%"}}>Ingredients
                            <ListItem>Carbs 23</ListItem>
                            <ListItem>Fiber 6</ListItem>
                            <ListItem>Protein 7</ListItem>
                            <ListItem>Fat 11</ListItem>

                            <ListItem>Calories 207</ListItem>
                            <ListItem>Sugar 1</ListItem>
                            <List>Item 3
                                <ListItem>Item 3.3</ListItem>
                            </List>
                        </List>


                        <div className={"flex-shrink-1"}>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring

                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and

                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </div>
                    </div>


                </CardContent>
            </Collapse>
        </Card>
    )
}