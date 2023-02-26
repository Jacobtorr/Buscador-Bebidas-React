import { Container } from "react-bootstrap"
//Componentes
import Formulario from "./components/Formulario"
import ListadoBebidas from "./components/ListadoBebidas"
import ModalBebida from "./components/ModalBebida"
// Providers
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />

          <ListadoBebidas />

          <ModalBebida />
        </Container>
      
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
