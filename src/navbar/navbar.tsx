import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootNavbar from "react-bootstrap/Navbar";
import "./nav-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";

function Navbar() {
  return (
    <BootNavbar expand="lg" className="navstyle">
      <Container fluid className="me-3">
        <Nav className="me-auto"></Nav>
        <BootNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#my-works">
              <FontAwesomeIcon icon={faCode} className="mx-2" />
              My works
            </Nav.Link>
            <Nav.Link
              href="mailto:da.azzali@gmail.com ?subject=Contacting from ypur github site..!&body=Hi Dario."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mx-2" />
              Mail me
            </Nav.Link>
            <Nav.Link href="#education">
              <FontAwesomeIcon icon={faGraduationCap} className="mx-2" />
              Education
            </Nav.Link>
          </Nav>
        </BootNavbar.Collapse>
      </Container>
    </BootNavbar>
  );
}

export default Navbar;
