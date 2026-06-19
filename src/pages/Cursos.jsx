import { useState } from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import CursoCard from "../components/CursoCard";

const cursosIniciales = [
  {
    id: 1,
    titulo: "React desde cero",
    categoria: "Frontend",
    precio: 18000,
    nivel: "Inicial",
    cupos: 80,
    descripcion: "Aprendé componentes, props, estado y eventos.",
  },
  {
    id: 2,
    titulo: "Node.js práctico",
    categoria: "Backend",
    precio: 22000,
    nivel: "Intermedio",
    cupos: 60,
    descripcion: "Creá APIs simples usando Express y JavaScript.",
  },
  {
    id: 3,
    titulo: "MongoDB para proyectos web",
    categoria: "Base de datos",
    precio: 20000,
    nivel: "Intermedio",
    cupos: 45,
    descripcion: "Modelá y consultá datos para aplicaciones reales.",
  },
  {
    id: 4,
    titulo: "Diseño web con Bootstrap",
    categoria: "Diseño UI",
    precio: 15000,
    nivel: "Inicial",
    cupos: 90,
    descripcion: "Armá interfaces modernas y responsive rápidamente.",
  },
  {
    id: 5,
    titulo: "TypeScript esencial",
    categoria: "Frontend",
    precio: 19000,
    nivel: "Intermedio",
    cupos: 70,
    descripcion: "Tipado estático para proyectos JavaScript escalables.",
  },
  {
    id: 6,
    titulo: "SQL para desarrolladores",
    categoria: "Base de datos",
    precio: 17000,
    nivel: "Inicial",
    cupos: 55,
    descripcion: "Consultá y modelá bases de datos relacionales desde cero.",
  },
];

const categorias = ["Todas", ...new Set(cursosIniciales.map((c) => c.categoria))];

function Cursos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  const cursosFiltrados = cursosIniciales.filter((curso) => {
    const coincideTexto = curso.titulo.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoriaSeleccionada === "Todas" || curso.categoria === categoriaSeleccionada;
    return coincideTexto && coincideCategoria;
  });

  return (
    <Container className="py-4">
      <h1 className="fw-bold mb-1">Cursos disponibles</h1>
      <p className="text-muted mb-4">
        {cursosIniciales.length} cursos · Seleccioná los que te interesan
      </p>

      {/* Filtros */}
      <Row className="g-3 mb-4">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text>🔍</InputGroup.Text>
            <Form.Control
              placeholder="Buscar curso..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Select
            value={categoriaSeleccionada}
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {cursosFiltrados.length === 0 ? (
        <p className="text-center text-muted py-5">
          No hay cursos que coincidan con tu búsqueda.
        </p>
      ) : (
        <Row className="g-4">
          {cursosFiltrados.map((curso) => (
            <Col md={6} lg={4} key={curso.id}>
              <CursoCard curso={curso} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Cursos;
