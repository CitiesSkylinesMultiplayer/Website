import React from 'react';
import './App.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GettingStarted from './GettingStarted';
import Usage from './Usage';
import FAQ from './FAQ';
import ReactGA from 'react-ga';

function App() {
  // Setup GA
  ReactGA.initialize('UA-37972059-10');
  ReactGA.pageview('/');

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand>Cities: Skylines Multiplayer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                target="_blank"
                href="https://steamcommunity.com/sharedfiles/filedetails/?id=1558438291"
              >
                Steam Workshop
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.patreon.com/CSM_MultiplayerMod"
              >
                Patreon
              </Nav.Link>
              <Nav.Link target="_blank" href="https://discord.gg/RjACPhd">
                Discord Server
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://github.com/CitiesSkylinesMultiplayer/CSM/"
              >
                GitHub
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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

      <footer className="Footer pt-3 pb-1 mt-5">
        <Container>
          <p>
            <small>
              This website and mod are in no way affiliated with Cities:
              Skylines or Paradox Interactive / Colossal Order
            </small>
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
