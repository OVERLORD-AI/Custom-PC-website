import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Creater.css'; // Import custom CSS for additional styling

const Creater = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'SMITE',
      img: '/images/Smite_PC_Cutout_2.png',
      configurations: {
        RAM: 'Teamgroup Delta RGB 32GB DDR5 6000 CL38 (2x16GB)',
        CPU: 'Intel Core i5-13600KF',
        GraphicsCard: 'GeForce RTX™ 4070 Super 12GB',
        Motherboard: 'MSI Pro Z790-P Wifi',
        Storage: '2TB Teamgroup Z44A7 PCIe 4.0 NVME',
        PowerSupply: 'MSI MAG A850GL PCIe 5',
        Case: 'Custom UV Printed Lian Li O11D Evo RGB Mid-Tower',
      },
      price: 2499.99,
    },
    {
      id: 2,
      name: 'Harmony',
      img: '/images/harmony_PC.png',
      configurations: {
        RAM: 'Kingston Fury Beast RGB 32GB DDR5 6000 C36 (2x16GB)',
        CPU: 'AMD Ryzen 7 7800X3D',
        GraphicsCard: 'MSI RTX 4080 Ventus 3X OC 16GB',
        Motherboard: 'MSI MAG B650 Tomahawk WIFI',
        Storage: '2TB Kingston KC3000 PCIe 4.0 NVME',
        PowerSupply: 'MSI MAG A850GL Gold PCIe 5',
        Case: 'Custom UV Printed Lian Li PC-011',
      },
      price: 3399.99,
    },
    {
      id: 3,
      name: 'Summit',
      img: '/images/Summit_PC.png',
      configurations: {
        RAM: 'Kingston Fury Beast RGB 64GB DDR5 6000 C36 (2x32GB)',
        CPU: 'Intel Core i9-14900K',
        GraphicsCard: 'GeForce RTX™ 4090 24GB',
        Motherboard: 'MSI MPG Z790 Carbon WIFI',
        Storage: '2TB+2TB Teamgroup Z44A7 PCIe 4.0 NVME',
        PowerSupply: 'MSI MPG A1000G PCIe 5',
        Case: 'Custom UV Printed Lian Li O11D Evo RGB Mid-Tower',
      },
      price: 5499.99,
    },
  ];

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      totalPrice: product.price,
    });
  };

  return (
    <Container className="creater-container">
      <h2 className="creater-title">Creater PCs</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="mb-4 creater-card">
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title className="creater-product-name">{product.name}</Card.Title>
                <Card.Text>
                  <strong>Configurations:</strong>
                  <ul>
                    {Object.keys(product.configurations).map((key) => (
                      <li key={key}>
                        <span className="creater-config-key">{key}:</span> <span className="creater-config-value">{product.configurations[key]}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Text>
                <Card.Text>
                  <strong>Price: </strong>${product.price}
                </Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Creater;
