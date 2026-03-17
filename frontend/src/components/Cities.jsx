// frontend/src/components/Cities.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/cities/all')
      .then(res => res.json())
      .then(data => setCities(data))
      .catch(err => console.log(err));
  }, []);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <div>
      {/* NAVBAR */}
      <nav style={{ backgroundColor: '#1a1a2e', padding: '12px 20px', display: 'flex', alignItems: 'center' }}>
        <span style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold' }}>MYtinerary</span>
        <button
          onClick={() => navigate('/')}
          style={{
            marginLeft: 'auto',
            background: '#e94560',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          🏠
        </button>
      </nav>

      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: '#1a1a2e' }}>
          Popular Destinations
        </h2>

        {/* FILTRO */}
        <Form.Control
          type="text"
          placeholder="Search cities..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4"
          style={{ maxWidth: '400px', margin: '0 auto 20px auto', display: 'block' }}
        />

        {/* LISTA DE CIUDADES */}
        <Row xs={2} md={4} className="g-3">
          {filteredCities.length > 0 ? (
            filteredCities.map(city => (
              <Col key={city._id}>
                <Card className="h-100 shadow-sm border-0">
                  <div style={{
                    backgroundColor: '#1a1a2e',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    borderRadius: '8px 8px 0 0'
                  }}>
                    🌍
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold" style={{ color: '#1a1a2e' }}>
                      {city.name}
                    </Card.Title>
                    <Card.Text style={{ color: '#666' }}>
                      {city.country}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center text-muted">
              No cities found starting with "{filter}"
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Cities;