import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import MisInscripciones from "./pages/MisInscripciones";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/inscripciones" element={<MisInscripciones />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
