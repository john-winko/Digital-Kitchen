import {useAxios} from "../utils/useAxios";
import {useEffect, useState} from "react";
import cookbook from '../data/cookbook.json'

function HomePage(){
    const backend = useAxios()
    const [recipe, setRecipe] = useState({})

    useEffect(()=>{
        setRecipe(cookbook[0])
    },[])

    const clicked = () => {
        backend.post('/api/test/').then((res)=>{
            console.log("resp", res.data)
        })
    }

    return (
        <div>
            <h1>This is a homepage</h1>
            <button onClick={clicked}>click</button>
            <p>{recipe.description}</p>
        </div>
    )
}

export default HomePage