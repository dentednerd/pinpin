import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet'
import Grid from './Grid';
import Footer from './Footer';
import { hour, currentTitle } from './utils';

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
  const [name, setName] = useState('you');


  useEffect(() => {
    const storedName = localStorage.getItem('pinpinName');

    if (!storedName) {
      localStorage.setItem('pinpinName', prompt('What can pinpin call you?', 'Your name'));
    }
    setName(storedName);
  })

  return (
    <main className="App">
      <Helmet>
        <title>{currentTitle}, {name}.</title>
      </Helmet>

      <Grid />

      <Footer hour={hour} />
      
    </main>
  );
};

export default App;
