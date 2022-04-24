import {useAxios} from "../utils/useAxios";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import {Form} from "react-bootstrap";
import {IconButton} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

export default function KeywordItem({keyword, setDirty, editItem, setEditItem}) {
    const backend = useAxios()

    const deleteItem = (id) => {
        backend.delete(`/api/v1/keyword/${id}/`)
            .then(() => setDirty(true))
    }

    const ViewItem = () => {
        return (
            <li>
                <button onClick={() => deleteItem(keyword.id)}>
                    <CloseIcon/>
                </button>
                <button onClick={() => setEditItem(keyword.id)}>
                    <EditIcon/>
                </button>
                {/*TODO add some better visibility styling */}
                <span style={{marginLeft: "1rem"}}>({keyword.acceptability}) {keyword.keyword}</span>
            </li>
        )
    }

    const saveItem = (e) => {
        e.preventDefault()
        backend.put(`/api/v1/keyword/${keyword.id}/`, new FormData(e.target))
            .then((res) => {
                setEditItem(null)
                setDirty(true)
            })
    }

    const EditItem = () => {
        return (
            <li>
                <Form onSubmit={saveItem}>
                    <IconButton type={"submit"}>
                        <SaveIcon/>
                    </IconButton>
                    <input name={"acceptability"} type={"range"} min={-10} max={10}
                           defaultValue={keyword.acceptability}/>
                    <input name={"keyword"} type={"text"} defaultValue={keyword.keyword}/>
                    <input name={"id"} type={"hidden"} defaultValue={keyword.id}/>
                    <input name={"user"} type={"hidden"} defaultValue={keyword.user}/>
                </Form>
            </li>
        )
    }

    return (editItem === keyword.id ? <EditItem/> : <ViewItem/>)
}