import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";
import {useState} from "react";

export default function MealListItem({recipe, selDate, addMeal}) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addMealClick = (mealType = null) => {
        setOpen(false)
        if (mealType) {
            addMeal(selDate, recipe, mealType)
        }
    }

    return (
        <ListItem disablePadding >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Adding meal for ${selDate.toLocaleDateString()}`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Click outside the dialog to cancel
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/*TODO add to context and pull on login*/}
                    <Button onClick={() => addMealClick(1)}>Breakfast</Button>
                    <Button onClick={() => addMealClick(5)}>Brunch</Button>
                    <Button onClick={() => addMealClick(2)}>Lunch</Button>
                    <Button onClick={() => addMealClick(3)}>Dinner</Button>
                    <Button onClick={() => addMealClick(4)}>Snack</Button>
                </DialogActions>
            </Dialog>
            <ListItemButton onClick={handleClickOpen}>
                <ListItemText primary={recipe.recipe.name}/>
            </ListItemButton>
        </ListItem>


    )
}