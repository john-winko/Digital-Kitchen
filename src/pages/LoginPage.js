import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Button, TextField} from "@mui/material";

function LoginPage() {
    let auth = useContext(AuthContext)

    return (
        <form onSubmit={auth.signin} style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            maxWidth: "50%",
            marginInline: "auto"
        }}>
            <TextField
                type="search"
                placeholder="Username"
                className="me-2"
                aria-label="Username"
                name={"username"}
                autoComplete={"user"}
            />
            <TextField
                type="password"
                placeholder="Password"
                className="me-2"
                aria-label="Password"
                name={"password"}
                autoComplete={"password"}
            />
            <Button variant="contained" type={"submit"} style={{width: "25%", marginInline: "auto"}}>Login</Button>
            <hr/>
            <p style={{width: "25%", marginInline: "auto"}}><Link to={"/signup"}>Sign up</Link></p>
        </form>
    );
}

export default LoginPage