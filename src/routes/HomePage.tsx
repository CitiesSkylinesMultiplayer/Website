import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import GettingStarted from '../components/GettingStarted';
import Usage from '../components/Usage';
import FAQ from '../components/FAQ';
import ReactGA from 'react-ga';

const HomePage = () => {
  // Home page hit
  ReactGA.pageview('/');
  console.log('hit /');

  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome</h1>
          <p>
            Cities: Skylines Multiplayer (CSM) is an in-development multiplayer
            mod for Cities: Skylines. <br />
            This mod aims to provide a simple client-server experience where
            users can play and build together in a single game.
          </p>
        </Container>
      </Jumbotron>

      <Container className="js-toc-content">
        <Row>
          <Col sm={12} md={9}>
            <GettingStarted />
            <Usage />
            <FAQ />
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
