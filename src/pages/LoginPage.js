import {Link} from "react-router-dom";
import {Button, Form, FormControl} from "react-bootstrap";
import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";

function LoginPage() {
    let auth = useContext(AuthContext)
  return (
    <div>
                <Form className="d-flex" onSubmit={auth.signin}>
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
        </Form>
      <hr/>
        <p><Link to={"/signup"}>Sign up</Link></p>

    </div>
  );
}

export default LoginPage