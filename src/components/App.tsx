import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../routes/HomePage';
import FAQPage from '../routes/FAQPage';
import SupportedModsPage from '../routes/SupportedModsPage';

import {
  CodeSlash,
  Discord,
  Download,
  FileCode,
  Github,
  PuzzleFill,
  QuestionCircle,
  Steam,
} from 'react-bootstrap-icons';

function App() {
  // Setup GA
  ReactGA.initialize('UA-37972059-10');

  return (
    <Router>
      <div className="App">
        <Navbar variant="dark" expand="lg" className="shadow bg-dark mb-4">
          <Container>
            <Navbar.Brand href="/">Cities: Skylines Multiplayer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="me-3" href="/faq">
                  <QuestionCircle className="me-2" fontSize={18} />
                  FAQ
                </Nav.Link>

                <Nav.Link className="me-3" href="/supported-mods">
                  <PuzzleFill className="me-2" fontSize={18} />
                  Supported Mods
                </Nav.Link>

                <NavDropdown
                  className="me-3"
                  title={
                    <span>
                      <Download className="me-2" fontSize={18} />
                      Downloads
                    </span>
                  }
                  id="download-dropdown"
                >
                  <NavDropdown.Item
                    target="_blank"
                    href="https://steamcommunity.com/sharedfiles/filedetails/?id=1558438291"
                  >
                    <Steam className="me-2" fontSize={18} />
                    Steam Workshop
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/releases"
                  >
                    <Download className="me-2" fontSize={18} />
                    Direct
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="me-3"
                  title={
                    <span>
                      <CodeSlash className="me-2" fontSize={18} />
                      Development
                    </span>
                  }
                  id="development-dropdown"
                >
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/"
                  >
                    <Github className="me-2" fontSize={18} />
                    GitHub Repository
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/wiki/Developer-Resources"
                  >
                    <FileCode className="me-2" fontSize={18} />
                    Developer Resources
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  className="me-3"
                  target="_blank"
                  href="https://www.patreon.com/CSM_MultiplayerMod"
                >
                  Patreon
                </Nav.Link>
                <Nav.Link target="_blank" href="https://discord.gg/RjACPhd">
                  <Discord className="me-2" fontSize={18} />
                  Discord
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/supported-mods" element={<SupportedModsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>

        <footer className="pb-1 mt-4">
          <Container>
            <p>
              <small>
                <em>
                  This website and mod are in no way affiliated with Cities:
                  Skylines or Paradox Interactive / Colossal Order.
                </em>
              </small>
            </p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;
