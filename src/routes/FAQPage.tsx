import React from 'react';
import ReactGA from 'react-ga';
import Markdown from 'react-markdown';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const FAQPage = () => {
  // FAQ page hit
  ReactGA.pageview('/faq');
  console.log('hit /faq');

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
      <Jumbotron fluid>
        <Container>
          <h1>Frequently Asked Questions</h1>
          <p>Frequently asked questions about Cities: Skylines Multiplayer.</p>
          <p className="mb-0">Edit this page <a href="https://github.com/CitiesSkylinesMultiplayer/CSM/wiki/Frequently-Asked-Questions">here</a>.</p>
        </Container>
      </Jumbotron>

      <Container>
        <Markdown source={source} />
      </Container>
    </>
  );
};

export default FAQPage;
