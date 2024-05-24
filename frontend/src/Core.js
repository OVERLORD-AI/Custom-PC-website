import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Core.css'; // Import custom CSS for additional styling

const Core = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: 'Horizon II',
      img: '/images/HorizonIIPro_Cutout.png',
      configurations: {
        RAM: 'Teamgroup Delta RGB 16GB DDR5 5600 CL40 (2x8GB)',
        CPU: 'Intel Core i5-12400F',
        GraphicsCard: 'AMD Radeon™ RX 6650 XT 8GB',
        Motherboard: 'MSI Pro B760-VC Wifi II',
        Storage: '1 TB PCle 4.o NVME',
        PowerSupply: 'MSI MAG A650GL',
        Case: 'Starforge Custom Deepcool CK560',
      },
      price: 1349.99,
    },
    {
      id: 2,
      name: 'Navigator',
      img: '/images/Navigator_Cutout.png',
      configurations: {
        RAM: 'Teamgroup Delta RGB 32GB DDR5 6000 CL38 (2x16GB)',
        CPU: 'AMD Ryzen 5 7600X',
        GraphicsCard: 'GeForce RTX™ 4070 12GB',
        Motherboard: 'MSI Pro B650-P Wifi',
        Storage: '1 TB PCle 4.o NVME',
        PowerSupply: 'MSI MAG A750GL PCIe 5',
        Case: 'XPG Invader X (Black)',
      },
      price: 1899.99,
    },
    {
      id: 3,
      name: 'Voyager II',
      img: '/images/V2-pro.png',
      configurations: {
        RAM: 'Teamgroup Delta RGB 32GB DDR5 6000 CL38 (2x16GB)',
        CPU: 'Intel Core i7-14700K',
        GraphicsCard: 'GeForce RTX™ 4070 Ti Super 16GB',
        Motherboard: 'MSI Z790 Tomahawk Wifi DDR5',
        Storage: '2TB PCIe 4.0 NVME',
        PowerSupply: 'MSI MAG A850GL PCIe 5',
        Case: 'Lian Li O11D Evo RGB Mid-Tower (Black)',
      },
      price: 2899.99,
    },
  ];

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      totalPrice: product.price,
    });
  };

  return (
    <Container className="core-container">
      <h2 className="core-title">Core PCs</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="mb-4 core-card">
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title className="product-name">{product.name}</Card.Title> {/* Add class to all product names */}
                <Card.Text>
                  <strong>Configurations:</strong>
                  <ul>
                    {Object.keys(product.configurations).map((key) => (
                      <li key={key}>
                        <span className="config-key">{key}:</span> <span className="config-value">{product.configurations[key]}</span>
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

export default Core;
