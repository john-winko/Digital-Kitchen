import {useEffect, useState} from "react";
import {useAxios} from "../utils/useAxios";

export default function Keywords(){
    const [keywords, setKeywords] = useState([])
    const [dirty, setDirty] = useState(true)
    const backend = useAxios()

    useEffect(()=>{
        if (dirty){
            // console.log("dirty")
            backend.get('/api/v1/keyword')
                .then((res)=>{
                    // console.log("not dirty")
                    setKeywords(res.data)
            })

        }
        setDirty(false)
    },[dirty, backend])

    const addKeyword = (e) =>{
        backend.post('/api/v1/keyword/', new FormData(e.target))
            .then((res)=>{
                setDirty(true)
        })
    }

    return (
        <div className={"m-1"} style={{backgroundColor:"lightcoral", borderRadius:"25px", margin:"5px", padding:"5px"}}>
            <h1>List of ingredients and your preference towards them</h1>
            <hr/>
            <form onSubmit={addKeyword} className={"d-flex flex-column w-50 align-self-center m-auto"}>
                <input name={"keyword"} type={"text"}/>
                <div className={"flex-row"}>
                    -10 (Deathly Allergic)
                    <input name={"acceptability"} type={"range"} min={-10} max={10}/>
                    +10 (Every meal please)
                </div>
                <button type={"submit"}>Add</button>
            </form>
            <hr/>
            <ul>
                {keywords.map(keyword=><li key={keyword.id}>{keyword.acceptability} - {keyword.keyword}</li>)}
            </ul>
        </div>
    )
}