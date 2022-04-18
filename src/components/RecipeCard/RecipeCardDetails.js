import {List, ListItem} from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import * as React from "react";

export default function RecipeCardDetails() {
    return (
        <CardContent>
            {/*TODO arrange details*/}
            <div className={"d-flex flex-row"}>
                <List sx={{width: "40%"}}>Ingredients
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
    )
}