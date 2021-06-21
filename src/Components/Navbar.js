import { Navbar, Nav} from 'react-bootstrap';
import { MDBSmoothScroll } from "mdbreact";

function Navigationbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigationbar;