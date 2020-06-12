import React from 'react';
import ReactGA from 'react-ga';
import Markdown from 'react-markdown';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const SupportedModsPage = () => {
  // Home page hit
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
        </Container>
      </Jumbotron>

      <Container>
        <Markdown source={source} />
      </Container>
    </>
  );
};

export default SupportedModsPage;
