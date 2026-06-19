import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button, Alert, Row, Col, Badge } from "react-bootstrap";
import useInscripcionesStore from "../store/useInscripcionesStore";

function MisInscripciones() {
  const { inscripciones, quitarCurso, vaciarInscripciones, totalAPagar } =
    useInscripcionesStore();
  const [confirmado, setConfirmado] = useState(false);
  const [cursosConfirmados, setCursosConfirmados] = useState([]);

  const confirmarInscripcion = () => {
    setCursosConfirmados([...inscripciones]);
    vaciarInscripciones();
    setConfirmado(true);
  };

  if (confirmado) {
    const total = cursosConfirmados.reduce((acc, c) => acc + c.precio, 0);
    return (
      <Container className="py-5 text-center" style={{ maxWidth: 560 }}>
        <div className="mb-4" style={{ fontSize: 64 }}>🎉</div>
        <h1 className="fw-bold mb-2">¡Inscripción confirmada!</h1>
        <p className="text-muted mb-4">
          Te inscribiste correctamente en {cursosConfirmados.length} curso{cursosConfirmados.length > 1 ? "s" : ""}.
        </p>

        <Card className="border-0 shadow-sm mb-4 text-start">
          <Card.Body>
            {cursosConfirmados.map((curso) => (
              <div key={curso.id} className="d-flex justify-content-between py-2 border-bottom">
                <span>{curso.titulo}</span>
                <span className="fw-semibold text-primary">
                  ${curso.precio.toLocaleString("es-AR")}
                </span>
              </div>
            ))}
            <div className="d-flex justify-content-between fw-bold fs-5 pt-3">
              <span>Total pagado</span>
              <span className="text-success">${total.toLocaleString("es-AR")}</span>
            </div>
          </Card.Body>
        </Card>

        <Button
          as={Link}
          to="/cursos"
          variant="primary"
          className="px-4"
          onClick={() => setConfirmado(false)}
        >
          Explorar más cursos
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold mb-0">Mis inscripciones</h1>
          <p className="text-muted mb-0">
            {inscripciones.length === 0
              ? "Ningún curso seleccionado"
              : `${inscripciones.length} curso${inscripciones.length > 1 ? "s" : ""} seleccionado${inscripciones.length > 1 ? "s" : ""}`}
          </p>
        </div>
        {inscripciones.length > 0 && (
          <Button variant="outline-danger" size="sm" onClick={vaciarInscripciones}>
            Vaciar lista
          </Button>
        )}
      </div>

      {inscripciones.length === 0 ? (
        <Alert variant="info" className="text-center py-5">
          <p className="fs-5 mb-3">Todavía no seleccionaste ningún curso.</p>
          <Button as={Link} to="/cursos" variant="primary">
            Explorar cursos →
          </Button>
        </Alert>
      ) : (
        <Row className="g-3">
          {/* Lista de cursos */}
          <Col lg={8}>
            {inscripciones.map((curso) => (
              <Card key={curso.id} className="mb-3 border-0 shadow-sm">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="fw-semibold mb-1">{curso.titulo}</h5>
                    <div className="d-flex gap-2">
                      <Badge bg="secondary">{curso.categoria}</Badge>
                      <Badge bg="light" text="dark">
                        {curso.nivel}
                      </Badge>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="fw-bold text-primary">
                      ${curso.precio.toLocaleString("es-AR")}
                    </span>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => quitarCurso(curso.id)}
                    >
                      Quitar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>

          {/* Resumen */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm sticky-top" style={{ top: "80px" }}>
              <Card.Header className="bg-white fw-semibold border-bottom">
                Resumen del pedido
              </Card.Header>
              <Card.Body>
                {inscripciones.map((curso) => (
                  <div
                    key={curso.id}
                    className="d-flex justify-content-between small text-muted mb-2"
                  >
                    <span className="text-truncate me-2" style={{ maxWidth: 160 }}>
                      {curso.titulo}
                    </span>
                    <span className="fw-medium text-dark">
                      ${curso.precio.toLocaleString("es-AR")}
                    </span>
                  </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total</span>
                  <span className="text-primary">
                    ${totalAPagar().toLocaleString("es-AR")}
                  </span>
                </div>
                <Button
                  variant="success"
                  className="w-100 mt-3 fw-semibold"
                  onClick={confirmarInscripcion}
                >
                  Confirmar inscripción
                </Button>
                <Button
                  as={Link}
                  to="/cursos"
                  variant="outline-secondary"
                  className="w-100 mt-2"
                  size="sm"
                >
                  Agregar más cursos
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default MisInscripciones;
