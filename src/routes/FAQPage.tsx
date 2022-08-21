import React from 'react';
import ReactGA from 'react-ga';
import Markdown from 'react-markdown';
import Container from 'react-bootstrap/Container';
import { Button, Card } from 'react-bootstrap';
import { PencilSquare } from 'react-bootstrap-icons';

const FAQPage = () => {
  // FAQ page hit
  ReactGA.pageview('/faq');

  const [source, setSource] = React.useState<string>(
    'Loading the FAQ, please wait...'
  );

  React.useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/wiki/CitiesSkylinesMultiplayer/CSM/Frequently-Asked-Questions.md'
    )
      .then((res) => res.text())
      .then((source) => setSource(source));
  }, []);

  return (
    <>
      <Container>
        <h1>Frequently Asked Questions</h1>
        <p>Frequently asked questions about Cities: Skylines Multiplayer.</p>
        <Button
          className="mb-3"
          href="https://github.com/CitiesSkylinesMultiplayer/CSM/wiki/Frequently-Asked-Questions"
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

export default FAQPage;
