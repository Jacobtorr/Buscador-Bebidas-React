import { Col, Card, Button } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas";

function Bebida({bebida}) {

    const { handleModalClick, handleBebidaIdClick } = useBebidas();

  return (
    <Col md={6} lg={3}>
        <Card className="mb-4">
            <Card.Img 
                variant="top"
                src={bebida.strDrinkThumb}
                alt={`Imagen de ${bebida.strDrink}`}
            />

            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>

                <Button
                    variant={'warning'}
                    className="w-100 text-uppercase mt-2 fw-bold"
                    onClick={() => {
                        handleModalClick()
                        handleBebidaIdClick(bebida.idDrink)
                    }}
                >
                    Ver receta
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}
export default Bebida