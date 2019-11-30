import React, { useState } from 'react';
import Helmet from 'react-helmet'
import Grid from './Grid';
import Footer from './Footer';
import { hour, currentTitle, getLocalName, useInterval } from './utils';

if (hour <= 3 || hour >= 21) {
  document.body.classList.add('night');
}

if ( hour >= 4 && hour <= 8) {
  document.body.classList.add('dawn');
}

if (hour > 8 && hour <= 16) {
  document.body.classList.add('day');
}

if (hour > 16 && hour <= 20) {
  document.body.classList.add('dusk');
}

const App = () => {
  const [name, setName] = useState(getLocalName());
  const [showSettings, toggleShowSettings] = useState(false);

  useInterval(() => {
    setName(getLocalName());
  }, 1000);

  return (
    <main className="App">
      <Helmet>
        <title>{currentTitle}, {name || 'you'}.</title>
      </Helmet>
      <Grid showSettings={showSettings} toggleShowSettings={toggleShowSettings} />
      <Footer hour={hour} showSettings={showSettings} toggleShowSettings={toggleShowSettings} />
    </main>
  );
};

export default App;
