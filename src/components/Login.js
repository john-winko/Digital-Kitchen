import {Button} from "react-bootstrap";
import {AuthContext} from "../context/AuthProvider";
import {useContext} from "react";
import {Link} from "react-router-dom";

function Login() {
    return (
        <>
            <Link to={"/signup"}>Sign up!</Link>
            <Link to={"/login"} style={{marginInline:"2rem"}}>Login</Link>
        </>
    )
}

function Logout() {
    let auth = useContext(AuthContext)

    return (
        <div>
            <span>Welcome {auth.user}!</span>
            <Button className="ms-2" variant="outline-success" onClick={auth.signout}>Logout</Button>
        </div>
    )
}

function ShowLoginLogout(){
    let auth = useContext(AuthContext)
    if (auth.token)
        return <Logout />
    else
        return <Login />
}

export {Login, Logout, ShowLoginLogout}