import React from 'react';
import Markdown from 'react-markdown';
import * as tocbot from 'tocbot';

const FAQ = () => {
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

  // When the markdown source changes, we need to rebuild the table of contents
  React.useEffect(() => {
    tocbot.refresh();
  }, [source]);

  return (
    <>
      <h2 id="faq">Frequently Asked Questions</h2>
      <Markdown source={source} />
    </>
  );
};

export default FAQ;
