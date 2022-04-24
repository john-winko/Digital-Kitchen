import {Button, Grid, Input} from "@mui/material";
import {useState} from "react";
import {signup} from "../utils/useAxios";
import {useNavigate} from "react-router-dom";

function Signup() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState(null)
    const validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    const errorText = "password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"

    const doSignUp = (e) => {
        e.preventDefault()
        if (e.target.password.value !== e.target.password2.value) {
            setErrorMessage("Passwords must match")
            return null
        }
        if (e.target.password.value.match(validRegex)) {
            setErrorMessage(null)
            signup(new FormData(e.target)).then((res) => {
                navigate("/login")
            })
        } else {
            setErrorMessage(errorText)
        }
    }

    return (
        <Grid container direction={"row"} className={"signup"}>
            <Grid item lg={3} xs={0}/>
            <Grid item xs>
                <h1>Enter your details below to sign up</h1>
                {errorMessage && <p className={"errorDetails"}>{errorMessage}</p>}
                <form onSubmit={doSignUp}>
                    <Grid container direction={"column"}>
                        <Input type={"text"} name={"firstName"} placeholder={"First Name"} inputProps={{maxLength: 20}}
                               required/>
                        <Input type={"text"} name={"lastName"} placeholder={"Last Name"} inputProps={{maxLength: 20}}
                               required/>
                        <Input type={"text"} name={"email"} placeholder={"email"} inputProps={{maxLength: 60}}/>
                        <Input type={"text"} name={"username"} placeholder={"username"} inputProps={{maxLength: 20}}
                               required/>
                        <Input type={"password"} name={"password"} placeholder={"password"} inputProps={{maxLength: 20}}
                               required/>
                        <Input type={"password"} name={"password2"} placeholder={"repeat password"}
                               inputProps={{maxLength: 20}}
                               required/>
                        <Button type={"submit"} variant="contained">Sign up</Button>
                    </Grid>
                </form>
            </Grid>
            <Grid item lg={3} xs={0}/>
        </Grid>
    )
}

export default Signup