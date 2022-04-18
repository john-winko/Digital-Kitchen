import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {ShowLoginLogout} from "../components/Login";


function TopBar() {
    const linkStyle = {color: 'inherit', textDecoration: 'inherit', marginLeft:"1rem"}

    return (
        <div>
            <Navbar expand="lg" style={{backgroundColor:"lightgrey", borderRadius:"25px 0 25px 0", margin:"5px", padding:"5px"}}>
                <Container fluid>
                    <Navbar.Brand><Link to={"/"} style={linkStyle}>Digital Kitchen </Link></Navbar.Brand>
                    <Nav><Link to={"/home"} style={linkStyle}>Home </Link></Nav>
                    <Nav><Link to={"/recipe_list"} style={linkStyle}>Browse Recipes </Link></Nav>
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: "100px"}} navbarScroll></Nav>
                    <ShowLoginLogout/>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopBar