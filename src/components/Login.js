import {AuthContext} from "../context/AuthProvider";
import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {useAxios} from "../utils/useAxios";

function Login() {
    return (
        <>
            <Link to={"/signup"}>Sign up!</Link>
            <Link to={"/login"} style={{marginInline: "2rem"}}>Login</Link>
        </>
    )
}

function Logout() {
    let {signout} = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [loading, setLoading] = useState(true)
    let backend = useAxios()

    useEffect(() => {
        if (loading) {
            backend.get('/api/v1/user/whoami/').then((response) => {
                setUsername(response.data.username)
            })
        }
        setLoading(false)
    }, [loading, backend])

    return (
        <div>
            <span>Welcome {username}!</span>
            <Button className="ms-2" variant="outline-success" onClick={signout}>Logout</Button>
        </div>
    )
}

function ShowLoginLogout() {
    let auth = useContext(AuthContext)
    if (auth.token)
        return <Logout/>
    else
        return <Login/>
}

export {Login, Logout, ShowLoginLogout}