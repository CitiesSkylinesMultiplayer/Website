import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GettingStarted from '../components/GettingStarted';
import Usage from '../components/Usage';
import ReactGA from 'react-ga';
import { Card } from 'react-bootstrap';

const HomePage = () => {
  // Home page hit
  ReactGA.pageview('/');

  return (
    <>
      <Container className="js-toc-content">
        <Row>
          <Col sm={12} md={9}>
            <Card className="shadow-sm">
              <Card.Body>
                <>
                  <h2>Cities: Skylines Multiplayer</h2>
                  <p>
                    Cities: Skylines Multiplayer (CSM) is an in-development
                    multiplayer mod for Cities: Skylines. <br />
                    This mod aims to provide a simple client-server experience
                    where users can play and build together in a single game.
                  </p>
                  <GettingStarted />
                  <Usage />
                </>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={3} className="d-none d-lg-block">
            <div className="js-toc sticky-top" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
