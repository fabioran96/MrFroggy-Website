import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col, Image } from "react-bootstrap";
import Logo from "./assets/2.png"
import "./Homepage.css"
import HomepageImage from "./assets/Mrfroggy website.svg"
import about from "./assets/chisono.svg"


const Homepage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="navbar1">
        <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              className="navbar-logo me-2"
            />
            Mr Froggy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">Chi sono</Nav.Link>
              <Nav.Link href="#services">Servizi</Nav.Link>
              <Nav.Link href="#contact">Scrivimi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container fluid className="homepage-container">
        <Row className="">
        
          <Col>
            <Image
              src= {HomepageImage}
              alt="Mr Froggy Web Developer"
              className="homepage-element"
            />
          </Col>
        </Row>

        <div className="about">
          <Image
            src={about}
            alt="Chi Sono"
            className="about-svg"
          />
        </div>

      </Container>
    </>
  );
};

export default Homepage;