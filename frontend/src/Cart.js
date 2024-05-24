import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cart = ({ cartItems, setCartItems }) => {
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout');
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <Container>
      <h2 className="my-4">Cart</h2>
      <Row>
        {cartItems.map((item) => (
          <Col md={4} key={item.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={item.img} alt={item.name} style={{ backgroundColor: '#fff' }} /> {/* Render image */}
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <strong>Configurations:</strong>
                  <ul>
                    {Object.keys(item.configurations).map((key) => (
                      <li key={key}>
                        {key}: {item.configurations[key].name}
                      </li>
                    ))}
                  </ul>
                </Card.Text>
                <Card.Text>
                  <strong>Total Price: </strong>${item.totalPrice}
                </Card.Text>
                <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {cartItems.length > 0 && (
        <div>
          <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
          <Button variant="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Cart;
