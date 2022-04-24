import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Button, Grid, Input} from "@mui/material";

function LoginPage() {
    let auth = useContext(AuthContext)

    return (
        <Grid container direction={"row"} className={"signup"}>
            <Grid item lg={3} xs={0}/>
            <Grid item xs>
                <form onSubmit={auth.signin}>
                    <Grid container direction={"column"}>
                        <Input
                            type="search"
                            placeholder="Username"
                            aria-label="Username"
                            name={"username"}
                            autoComplete={"user"}
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            name={"password"}
                            autoComplete={"password"}
                        />
                        <Button variant="contained" type={"submit"}>Login</Button>
                    </Grid>
                </form>
            </Grid>
            <Grid item lg={3} xs={0}/>
        </Grid>
    );
}

export default LoginPage