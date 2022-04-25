import { Navbar, Nav, Container,} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navibar.css";

//photo//
import logo from "./omks-icon.jpg";

function Navibar() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="fw-bold" href="/">
            <img src={logo} alt="" style={{ width: "60px" }} />
            OMKS.kg
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} className="fw-bold fs-5" to="/">
                Главная
              </Nav.Link>
              <Nav.Link as={NavLink} className="fw-bold fs-5" to="/about">
                О нас
              </Nav.Link>
              <Nav.Link as={NavLink} className="fw-bold fs-5" to="/news">
                Новости
              </Nav.Link>
              <Nav.Link as={NavLink} className="fw-bold fs-5" to="/contact">
                Контакты
              </Nav.Link>
            </Nav>
            <Nav>
              <NavLink to="/login" className="auth-btn">
                Вход  
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navibar;
