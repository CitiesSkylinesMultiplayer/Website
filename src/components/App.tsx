import React from 'react';
import './App.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand>Cities: Skylines Multiplayer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://steamcommunity.com/sharedfiles/filedetails/?id=1558438291">
                Steam Workshop
              </Nav.Link>
              <Nav.Link href="https://www.patreon.com/CSM_MultiplayerMod">
                Patreon
              </Nav.Link>
              <Nav.Link href="https://discord.gg/RjACPhd">
                Discord Server
              </Nav.Link>
              <Nav.Link href="https://github.com/CitiesSkylinesMultiplayer/CSM/">
                GitHub
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Jumbotron fluid>
        <Container>
          <h1>Under Development</h1>
          <p>
            This website is still under development. See the links above for
            more information.
          </p>
        </Container>
      </Jumbotron>

      <footer className="Footer">
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
