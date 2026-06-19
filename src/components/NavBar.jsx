import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import useInscripcionesStore from "../store/useInscripcionesStore";

function NavBar() {
  const cantidadCursos = useInscripcionesStore((state) => state.cantidadCursos);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-5">
          🎓 Academia React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-menu" />
        <Navbar.Collapse id="nav-menu">
          <Nav className="ms-auto gap-1">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className={({ isActive }) => (isActive ? "active fw-semibold" : "")}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/cursos"
              className={({ isActive }) => (isActive ? "active fw-semibold" : "")}
            >
              Cursos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/inscripciones"
              className={({ isActive }) =>
                `d-flex align-items-center gap-2 ${isActive ? "active fw-semibold" : ""}`
              }
            >
              Mis inscripciones
              <Badge bg={cantidadCursos() > 0 ? "warning" : "secondary"} text="dark">
                {cantidadCursos()}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
