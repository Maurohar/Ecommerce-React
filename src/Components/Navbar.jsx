import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
function NavBar() {

    return (
        <Navbar
            data-bs-theme="dark"
            bg="dark"
            variant="dark"
            className="bg-body-tertiary justify-content-between">
            <Col xxl="10">
                <Link className="linkNav" to="/home">Home</Link>
                <Link className="linkNav" to="/products">Products</Link>
                <Link className="linkNav" to="/cart">Cart</Link>
                <Link className="linkNav" to="/user">Register</Link>
            </Col>
        </Navbar>
    );
}

export default NavBar;