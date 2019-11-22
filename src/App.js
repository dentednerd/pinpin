import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import Greeter from './Greeter';
import Todo from './Todo';
import Settings from './Settings';

const hour = dayjs().format('HH');

if (hour <= 4 || hour >= 21) {
  document.body.classList.add('night');
}

if ( hour > 4 && hour <= 8) {
  document.body.classList.add('dawn');
}

if (hour > 8 && hour <= 16) {
  document.body.classList.add('day');
}

if (hour > 16 && hour <= 20) {
  document.body.classList.add('dusk');
}

const App = () => {
  const [location, setLocation] = useState('Manchester,UK');
  const [name, setName] = useState('you');
  const [weather, setWeather] = useState('');
  // const [settings, toggleSettings] = useState(false);

  const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=9ce56d82d3380200bba32017c0ba1d6b';

  useEffect(() => {
    axios.get(weatherUrl)
      .then(res => {
        setWeather(res.data.weather[0].main);
      }
    )

    const storedName = localStorage.getItem('pinpinName');

    if (!storedName) {
      localStorage.setItem('pinpinName', prompt('What can pinpin call you?', 'Your name'));
    }

    const storedLocation = localStorage.getItem('pinpinLocation');

    if (!storedLocation) {
      localStorage.setItem('pinpinLocation', prompt('Where are you? (City name, 2-letter country code)', 'e.g. London,UK'));
    }

    setName(storedName);
    setLocation(storedLocation);
  })

  return (
    <main className="App">

      <section className="grid">

        <section className="left">
          <Greeter name={name} location={location} condition={weather} />
        </section>

        <section className="right">
          <div className="wrapper">
            <Todo />
          </div>
        </section>

      </section>

      <footer>
        <Settings />
        <span>pinpin</span>
      </footer>
      
    </main>
  );
};

export default App;
