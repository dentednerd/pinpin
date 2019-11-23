import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  weatherCondition,
  dayOfWeek,
  sectionOfDay,
  weatherKey
} from './utils';
import { getLocalLocation } from '../utils';

const Weather = () => {
  const [weather, setWeather] = useState('sunny');
  const [location, setLocation] = useState('Manchester,UK');

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherKey}`;

  useEffect(() => {
    axios.get(weatherUrl)
      .then(res => {
        setWeather(weatherCondition(res.data.weather[0].main));
      }
    )
  });

  useEffect(() => {
    setLocation(getLocalLocation());
  })

  return (
    <p>It's {weather} {dayOfWeek} {sectionOfDay()}{location && ` in ${location.split(',')[0]}`}.</p>
  );
}

export default Weather;