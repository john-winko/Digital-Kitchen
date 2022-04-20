import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import {Button, FormControl} from "@mui/material";

function LoginPage() {
    let auth = useContext(AuthContext)
  return (
    <div>
                <form className="d-flex" onSubmit={auth.signin}>
            <FormControl
                type="search"
                placeholder="Username"
                className="me-2"
                aria-label="Username"
                name={"username"}
                autoComplete={"user"}
            />
            <FormControl
                type="password"
                placeholder="Password"
                className="me-2"
                aria-label="Password"
                name={"password"}
                autoComplete={"password"}
            />
            <Button variant="outline-success" type={"submit"}>Login</Button>
        </form>
      <hr/>
        <p><Link to={"/signup"}>Sign up</Link></p>

    </div>
  );
}

export default LoginPage