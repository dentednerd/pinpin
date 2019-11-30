import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  weatherCondition,
  dayOfWeek,
  sectionOfDay,
  weatherKey
} from './utils';
import {
  getLocalLocation,
  setLocalLocation,
  getLocalWeather,
  setLocalWeather,
  useInterval
} from '../utils';

const Weather = () => {
  const [weather, setWeather] = useState(getLocalWeather());
  const [location, setLocation] = useState(getLocalLocation());

  useEffect(() => {
    if (location === ('undefined' || null || '')) {
      setLocalLocation('your area');
    }
  }, [location]);

  useInterval(() => {
    setLocation(getLocalLocation());
  }, 1000);

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}`;

  useEffect(() => {
    if (!location) {
      const newLocation = setLocalLocation();
      setLocation(newLocation);
    } else {
      axios.get(weatherUrl)
        .then(res => {
          setWeather(weatherCondition(res.data.weather[0].main));
          setLocalWeather(weatherCondition(res.data.weather[0].main));
        }
      )
    }
  }, [location, weatherUrl]);

  if (!weather) return <p />;

  return (
    <p>It's {weather} {dayOfWeek} {sectionOfDay()}{location && ` in ${location.split(',')[0]}`}.</p>
  );
}

export default Weather;