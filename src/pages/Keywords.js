import {useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";
import KeywordItem from "../components/KeywordItem";
import {Button, Grid, Input, List, ListItem, ListItemText, Slider} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Delete, Edit} from "@mui/icons-material";

export default function Keywords() {
    // TODO wire up to myCollections
    const [keywords, setKeywords] = useState([])
    const [editItem, setEditItem] = useState(null)
    const [dirty, setDirty] = useState(true)
    const backend = useAxios()
    const marks = [
        {
            value: -10,
            label: 'Death'
        },
        {
            value: -6,
            label: 'Allergy'
        },
        {
            value: -3,
            label: 'Meh'
        },
        {
            value: 0,
            label: 'Okay'
        },
        {
            value: 3,
            label: 'Sure'
        },
        {
            value: 6,
            label: 'Yum'
        },
        {
            value: 10,
            label: 'Heaven'
        },

    ]

    useEffect(() => {
        if (dirty) {
            backend.get('/api/v1/keyword/')
                .then((res) => {
                    setKeywords(res.data)
                })
        }
        setDirty(false)
    }, [dirty, backend])

    const addKeyword = (e) => {
        backend.post('/api/v1/keyword/', new FormData(e.target))
            .then((res) => {
                setDirty(true)
            })
    }

    return (
        <Grid container direction={"row"}>
            <Grid item xs={0} md={2} xl={3}/>
            <Grid item xs>
                <Grid container className={"keywords"} direction={"column"}>
                    <Grid item>
                        <h1>Keyword preferences</h1>
                        <hr/>
                    </Grid>
                    <Grid item>
                        <form onSubmit={addKeyword}>
                            <Input name={"keyword"}
                                   type={"text"}
                                   fullWidth
                                   placeholder={"Recipe ingredient or keyword to set a preference for"}/>
                            <Slider track={false}
                                    getAriaValueText={(value) => value}
                                    min={-10}
                                    max={10}
                                    defaultValue={0}
                                    marks={marks}
                                    name={"acceptability"}
                            />
                            <Button variant="contained" type={"submit"}>Add</Button>
                        </form>
                    </Grid>
                    <Grid item>
                        <List>
                            {keywords.map((keyword)=>
                                <KeywordItem key={keyword.id} keyword={keyword} setDirty={setDirty} marks={marks}/>)}
                            {/*{keywords.map(keyword =>*/}
                            {/*    <KeywordItem key={keyword.id}*/}
                            {/*                 {...{*/}
                            {/*                     keyword,*/}
                            {/*                     setDirty,*/}
                            {/*                     editItem,*/}
                            {/*                     setEditItem*/}
                            {/*                 }}*/}
                            {/*    />)}*/}
                        </List>
                    </Grid>


                </Grid>
            </Grid>
            <Grid item xs={0} md={2} xl={3}/>
        </Grid>


    )
}