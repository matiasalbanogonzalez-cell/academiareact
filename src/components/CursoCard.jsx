import { Card, Badge, Button, ProgressBar } from "react-bootstrap";
import useInscripcionesStore from "../store/useInscripcionesStore";

function CursoCard({ curso }) {
  const { agregarCurso, quitarCurso, inscripciones } = useInscripcionesStore();
  const estaInscripto = inscripciones.some((c) => c.id === curso.id);

  const niveles = {
    Inicial: "success",
    Intermedio: "warning",
    Avanzado: "danger",
  };

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Body className="d-flex flex-column">
        <div className="mb-2 d-flex justify-content-between align-items-center">
          <Badge bg="secondary">{curso.categoria}</Badge>
          <Badge bg={niveles[curso.nivel] ?? "info"}>{curso.nivel}</Badge>
        </div>

        <Card.Title className="mb-1">{curso.titulo}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">{curso.descripcion}</Card.Text>

        <div className="mb-3">
          <small className="text-muted">Cupos disponibles: {curso.cupos}</small>
          <ProgressBar
            now={curso.cupos}
            max={100}
            variant="info"
            className="mt-1"
            style={{ height: "6px" }}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="fw-bold fs-5 text-primary">
            ${curso.precio.toLocaleString("es-AR")}
          </span>
          {estaInscripto ? (
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => quitarCurso(curso.id)}
            >
              Quitar
            </Button>
          ) : (
            <Button variant="primary" size="sm" onClick={() => agregarCurso(curso)}>
              Inscribirme
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default CursoCard;
