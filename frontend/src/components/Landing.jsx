// frontend/src/components/Landing.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Navbar, Button, Row, Col, Card } from 'react-bootstrap';
import mockup2 from '../images/circle-arrow.png';
import logo from '../images/MYtineraryLogo.png';
import homeIcon from '../images/home.png';

const cities = ['Paris', 'Tokyo', 'New York', 'Barcelona'];

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>

      {/* NAVBAR */}
      <Navbar style={{ backgroundColor: '#1a1a2e' }} className="px-3">
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <img src={logo} alt="Logo" width={40} height={40} style={{ borderRadius: '50%' }} />
          <span style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold' }}>MYtinerary</span>
        </Navbar.Brand>

        <Button
          variant="danger"
          className="ms-auto rounded-circle p-2 d-flex align-items-center justify-content-center"
          style={{ width: '44px', height: '44px', fontSize: '1.2rem' }}
          onClick={() => navigate('/')}
        >
          <img src={homeIcon} alt="Home" width={22} height={22} style={{ filter: 'invert(1)', mixBlendMode: 'screen' }} />
        </Button>
      </Navbar>

      {/* HERO */}
      <div style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', color: '#fff', textAlign: 'center', padding: '80px 20px' }}>
        <h1 className="fw-bold mb-3">Find your perfect trip</h1>
        <p className="text-secondary mb-4 fs-5">
          Designed by insiders who know and love their cities!
        </p>
        <Button
          variant="danger"
          size="lg"
          className="rounded-pill d-inline-flex align-items-center gap-2"
          onClick={() => navigate('/cities')}  // ✅ navega a Cities
        >
          Explore Cities
          <img src={mockup2} alt="Arrow" width={22} height={22} style={{ filter: 'invert(1)', mixBlendMode: 'screen' }} />
        </Button>
      </div>

      {/* CITIES */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: '#1a1a2e' }}>
          Popular Destinations
        </h2>
        <Row xs={2} md={4} className="g-3">
          {cities.map((city) => (
            <Col key={city}>
              <Card className="h-100 shadow-sm border-0">
                <div style={{ backgroundColor: '#1a1a2e', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', borderRadius: '8px 8px 0 0' }}>
                  🌍
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold" style={{ color: '#1a1a2e' }}>
                    {city}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
};

export default Landing;