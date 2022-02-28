import React from 'react';
import './App.scss';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ReactGA from 'react-ga';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../routes/HomePage';
import FAQPage from '../routes/FAQPage';
import SupportedModsPage from '../routes/SupportedModsPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faPuzzlePiece,
  faCode,
  faQuestionCircle,
} from '@fortawesome/pro-duotone-svg-icons';

import {
  faDiscord,
  faPatreon,
} from '@fortawesome/free-brands-svg-icons';

function App() {
  // Setup GA
  ReactGA.initialize('UA-37972059-10');

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
          <Container>
            <Navbar.Brand href="/#/">Cities: Skylines Multiplayer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="mr-3" href="/#/faq">
                  <FontAwesomeIcon className="mr-2" icon={faQuestionCircle} />
                  FAQ
                </Nav.Link>
                
                <Nav.Link className="mr-3" href="/#/supported-mods">
                  <FontAwesomeIcon className="mr-2" icon={faPuzzlePiece} />
                  Supported Mods
                </Nav.Link>

                <NavDropdown
                  className="mr-3"
                  title={
                    <span>
                      <FontAwesomeIcon className="mr-2" icon={faDownload} />
                      Downloads
                    </span>
                  }
                  id="download-dropdown"
                >
                  <NavDropdown.Item
                    target="_blank"
                    href="https://steamcommunity.com/sharedfiles/filedetails/?id=1558438291"
                  >
                    Steam Workshop
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/releases"
                  >
                    Direct
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  className="mr-3"
                  title={
                    <span>
                      <FontAwesomeIcon className="mr-2" icon={faCode} />
                      Development
                    </span>
                  }
                  id="development-dropdown"
                >
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/"
                  >
                    GitHub Repository
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/wiki/Developer-Resources"
                  >
                    Developer Resources
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    target="_blank"
                    href="https://github.com/CitiesSkylinesMultiplayer/CSM/search?q=%22Development+Notes%22&type=wikis"
                  >
                    Development Notes
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  className="mr-3"
                  target="_blank"
                  href="https://www.patreon.com/CSM_MultiplayerMod"
                >
                  <FontAwesomeIcon className="mr-2" icon={faPatreon} />
                  Patreon
                </Nav.Link>
                <Nav.Link target="_blank" href="https://discord.gg/RjACPhd">
                  <FontAwesomeIcon className="mr-2" icon={faDiscord} />
                  Discord
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/supported-mods">
            <SupportedModsPage />
          </Route>
          <Route path="/faq">
            <FAQPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

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
    </Router>
  );
}

export default App;
