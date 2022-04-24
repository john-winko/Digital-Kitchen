import {useAxios} from "../utils/useAxios";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Input,
    ListItem,
    ListItemText,
    Slider
} from "@mui/material";
import {Edit} from "@mui/icons-material";
import {useState} from "react";

export default function KeywordItem({keyword, setDirty, marks}) {
    const backend = useAxios()
    const [dialogOpen, setDialogOpen] = useState(false)

    const deleteItem = () => {
        backend.delete(`/api/v1/keyword/${keyword.id}/`)
            .then(() => {
                setDialogOpen(false)
                setDirty(true)
            })
    }

    const saveItem = (e) => {
        e.preventDefault()
        backend.put(`/api/v1/keyword/${keyword.id}/`, new FormData(e.target))
            .then((res) => {
                setDialogOpen(false)
                setDirty(true)
            })
    }

    const closeDialog = () => setDialogOpen(false)


    const KeywordDialog = () => {
        return (
            <Dialog open={dialogOpen} onClose={closeDialog} fullWidth>
                <form onSubmit={saveItem}>
                    <DialogContent>
                        <Input name={"keyword"}
                               type={"text"}
                               fullWidth
                               defaultValue={keyword.keyword}
                               placeholder={"Recipe ingredient or keyword to set a preference for"}/>
                        <Slider track={false}
                                getAriaValueText={(value) => value}
                                min={-10}
                                max={10}
                                defaultValue={keyword.acceptability}
                                marks={marks}
                                name={"acceptability"}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type={"submit"}>Save</Button>
                        <Button onClick={deleteItem}>Delete</Button>
                        <Button onClick={closeDialog}>Cancel</Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }

    return (
        <ListItem>
            <KeywordDialog />
            <IconButton onClick={() => setDialogOpen(true)}>
                <Edit/>
            </IconButton>
            <ListItemText primary={`${keyword.keyword} (${keyword.acceptability}) `}/>
        </ListItem>
    )
}