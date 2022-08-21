import React from 'react';
import ReactGA from 'react-ga';
import Markdown from 'react-markdown';
import Container from 'react-bootstrap/Container';
import { Button, Card } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons';

const SupportedModsPage = () => {
  // Supported mods page hit
  ReactGA.pageview('/supported-mods');

  const [source, setSource] = React.useState<string>(
    'Loading list of supported mods...'
  );

  React.useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/wiki/CitiesSkylinesMultiplayer/CSM/Supported-Mods.md'
    )
      .then((res) => res.text())
      .then((source) => setSource(source));
  }, []);

  return (
    <>
      <Container>
        <h1>Supported Mods</h1>
        <p>
          Mods that have been tested to work (or partially work) with Cities:
          Skylines Multiplayer.
        </p>
        <Button
          className="mb-3"
          href="https://github.com/CitiesSkylinesMultiplayer/CSM/wiki/Supported-Mods"
        >
          <PencilSquare className="me-2" fontSize={16} />
          Edit
        </Button>

        <Card className="shadow-sm">
          <Card.Body>
            <Markdown children={source} />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default SupportedModsPage;
