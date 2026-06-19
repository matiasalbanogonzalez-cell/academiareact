import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const features = [
  {
    icon: "📚",
    titulo: "Cursos actualizados",
    texto: "Contenido práctico y relevante para el mercado actual.",
  },
  {
    icon: "🎯",
    titulo: "Aprendizaje guiado",
    texto: "Docentes con experiencia en proyectos reales.",
  },
  {
    icon: "🚀",
    titulo: "A tu ritmo",
    texto: "Accedé a los materiales cuando más te convenga.",
  },
];

function Inicio() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section py-5 text-center text-white">
        <Container>
          <p className="hero-eyebrow text-uppercase fw-semibold mb-3 opacity-75">
            Plataforma de cursos
          </p>
          <h1 className="display-4 fw-bold mb-3">
            Aprendé tecnología con propósito
          </h1>
          <p className="lead mb-4 opacity-90" style={{ maxWidth: 560, margin: "0 auto 1.5rem" }}>
            Cursos de Frontend, Backend y Bases de datos pensados para quienes quieren
            construir cosas reales.
          </p>
          <Button
            as={Link}
            to="/cursos"
            variant="warning"
            size="lg"
            className="fw-semibold px-4"
          >
            Ver cursos disponibles →
          </Button>
        </Container>
      </section>

      {/* Features */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4">¿Por qué elegirnos?</h2>
          <Row className="g-4">
            {features.map((f) => (
              <Col md={4} key={f.titulo}>
                <Card className="h-100 border-0 shadow-sm text-center p-3">
                  <Card.Body>
                    <div className="fs-1 mb-3">{f.icon}</div>
                    <Card.Title className="fw-semibold">{f.titulo}</Card.Title>
                    <Card.Text className="text-muted">{f.texto}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-2">¿Listo para empezar?</h2>
          <p className="text-muted mb-4">
            Explorá el catálogo y armá tu inscripción.
          </p>
          <Button as={Link} to="/cursos" variant="primary" className="px-4">
            Explorar cursos
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Inicio;
