import {Grid, List, ListItem, ListSubheader} from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import * as React from "react";

export default function RecipeCardDetails({ingredients, steps}) {
    return (
        <CardContent>
            <Grid container spacing={1}>
                <Grid item md={5}>
                    <List dense subheader={
                        <ListSubheader
                            sx={{textAlign: "center", backgroundColor: "inherit"}}>Ingredients</ListSubheader>}>
                        {ingredients.map((x) => <ListItem key={`ingredient${x.id}`}>{x.ingredient}</ListItem>)}
                    </List>
                </Grid>
                <Grid item md={7} xs={12}>
                     <List dense subheader={
                        <ListSubheader
                            sx={{textAlign: "center", backgroundColor: "inherit"}}>Instructions</ListSubheader>}>
                         {steps.map((x, index) => <ListItem key={`step${x.id}`}>{index+1}.) {x.step}</ListItem>)}
                    </List>
                </Grid>
            </Grid>
        </CardContent>
    )
}