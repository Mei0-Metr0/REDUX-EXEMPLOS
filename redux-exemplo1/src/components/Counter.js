import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Counter = () => {
  const count = useSelector((state) => state.counter); // Acessa o valor do estado global
  const dispatch = useDispatch();

  return (
    <Container fluid="md" className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="text-center shadow-lg">
            <Card.Body>
              <Card.Title as="h1" className="display-4">
                Counter: {count}
              </Card.Title>
              <div className="my-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="me-2"
                  onClick={() => dispatch(increment())}
                >
                  Incrementar
                </Button>
                <Button
                  variant="danger"
                  size="lg"
                  onClick={() => dispatch(decrement())}
                >
                  Decrementar
                </Button>
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">
              Controle o valor com os botões
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Counter; 