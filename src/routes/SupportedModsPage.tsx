import React from 'react';
import ReactGA from 'react-ga';
import Markdown from 'react-markdown';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const SupportedModsPage = () => {
  // Supported mods page hit
  ReactGA.pageview('/supported-mods');
  console.log('hit /supported-mods');

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
      <Jumbotron fluid>
        <Container>
          <h1>Supported Mods</h1>
          <p>Mods that have been tested to work (or partially work) with Cities: Skylines Multiplayer.</p>
          <p className="mb-0">Edit this page <a href="https://github.com/CitiesSkylinesMultiplayer/CSM/wiki/Supported-Mods">here</a>.</p>
        </Container>
      </Jumbotron>

      <Container>
        <Markdown source={source} />
      </Container>
    </>
  );
};

export default SupportedModsPage;
