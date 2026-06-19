import { create } from "zustand";

const useInscripcionesStore = create((set, get) => ({
  inscripciones: [],

  agregarCurso: (curso) => {
    const yaInscripto = get().inscripciones.some((c) => c.id === curso.id);
    if (!yaInscripto) {
      set((state) => ({ inscripciones: [...state.inscripciones, curso] }));
    }
  },

  quitarCurso: (cursoId) => {
    set((state) => ({
      inscripciones: state.inscripciones.filter((c) => c.id !== cursoId),
    }));
  },

  vaciarInscripciones: () => set({ inscripciones: [] }),

  totalAPagar: () =>
    get().inscripciones.reduce((acc, curso) => acc + curso.precio, 0),

  cantidadCursos: () => get().inscripciones.length,
}));

export default useInscripcionesStore;
