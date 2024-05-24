import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file

const products = [
  {
    id: 1,
    name: 'Internal Hardware',
    configurations: {
      RAM: [
        { name: 'Select', price: 0 },
        { name: '8GB', price: 50, img: '/images/8_gb.jpeg' },
        { name: '16GB', price: 100, img: '/images/16_gb.jpeg' },
        { name: '32GB', price: 200, img: '/images/32_gb.png' }
      ],
      Storage: [
        { name: 'Select', price: 0 },
        { name: '512 GB', price: 0, img: '/images/512_gb.jpeg' },
        { name: '1 TB', price: 200, img: '/images/1_tb.png' },
        { name: '2TB', price: 300, img: '/images/2_tb.jpeg' }
      ],
      GraphicsCard: [
        { name: 'Select', price: 0 },
        { name: 'GeForce RTX™ 4070 12GB', price: 400, img: '/images/Nvi_gc.png' },
        { name: 'AMD Radeon™ RX 6650 XT 8GB', price: 350, img: '/images/amd_gc.jpeg' }
      ]
    }
  },
  {
    id: 2,
    name: 'External Hardware',
    configurations: {
      Keyboard: [
        { name: 'Select', price: 0},
        { name: 'Mechanical Keyboard', price: 100, img: '/images/mech_key.png' },
        { name: 'Membrane Keyboard', price: 50, img: '/images/mem_key.jpg' }
      ],
      Mouse: [
        { name: 'Select', price: 0, img: '/images/mouse-select.jpg' },
        { name: 'Gaming Mouse', price: 70, img: '/images/game_mouse.jpg' },
        { name: 'Standard Mouse', price: 30, img: '/images/stand_mouse.jpg' }
      ],
      Microphone: [
        { name: 'Select', price: 0},
        { name: 'Premium', price: 270, img: '/images/prem_mic.jpg' },
        { name: 'Standard', price: 130, img: '/images/stand_mic.jpeg' }
      ]
    }
  }
];

const ProductSelection = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedConfigurations, setSelectedConfigurations] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    Object.values(selectedConfigurations).forEach(option => {
      if (option && option !== 'Select') {
        totalPrice += Number(option.price);
      }
    });
    setTotalPrice(totalPrice);
  }, [selectedConfigurations]);

  const handleProductChange = (productId) => {
    const product = products.find(product => product.id === productId);
    setSelectedProduct(product);
    setSelectedConfigurations({});
    setTotalPrice(0);
  };

  const handleConfigurationChange = (category, selectedIndex) => {
    const selectedOption = selectedProduct.configurations[category][selectedIndex];
    setSelectedConfigurations(prevState => ({
      ...prevState,
      [category]: selectedOption
    }));
  };

  const handleAddToCart = () => {
    if (selectedProduct && Object.keys(selectedConfigurations).length > 0) {
      const cartItem = {
        id: Math.random(), // Use a unique identifier for the cart item
        name: selectedProduct.name,
        configurations: selectedConfigurations,
        totalPrice: totalPrice
      };
      addToCart(cartItem);
    }
  };

  return (
    <Container fluid className="py-5" style={{ background: 'url(/images/Signin_background_1.jpg) no-repeat center center fixed', backgroundSize: 'cover', minHeight: '100vh', color: 'white' }}>
      <Container className="bg-dark p-4 rounded" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
        <h2 className="my-4 text-primary">Accessory</h2>
        <Form.Select value={selectedProduct ? selectedProduct.id : ''} onChange={(e) => handleProductChange(parseInt(e.target.value))} className="mb-4">
          <option value="">Hardware</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.name}</option>
          ))}
        </Form.Select>

        {selectedProduct && (
          <div>
            <h3 className="text-success">{selectedProduct.name}</h3>
            <h4 className="mt-4 text-info">Products:</h4>
            {Object.keys(selectedProduct.configurations).map((category, index) => (
              <Row key={index} className="mb-3">
                <h5 className="text-warning">{category}:</h5>
                <Form.Select
                  value={selectedConfigurations[category] ? selectedProduct.configurations[category].indexOf(selectedConfigurations[category]) : ''}
                  onChange={(e) => handleConfigurationChange(category, e.target.value)}
                  className="mb-3"
                >
                  {selectedProduct.configurations[category].map((config, idx) => (
                    <option key={idx} value={idx}>{config.name} - ${config.price}</option>
                  ))}
                </Form.Select>
                {selectedConfigurations[category] && selectedConfigurations[category].img && (
                  <Col md={4} className="d-flex justify-content-center">
                    <Card className="bg-dark text-white" style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                      <Card.Img variant="top" src={selectedConfigurations[category].img} style={{ backgroundColor: '#fff' }} />
                    </Card>
                  </Col>
                )}
              </Row>
            ))}
            <h4 className="text-danger">Total Price: ${totalPrice}</h4>
            <Button onClick={handleAddToCart} variant="success" className="mt-3">Add to Cart</Button>
          </div>
        )}
      </Container>
    </Container>
  );
};

export default ProductSelection;
