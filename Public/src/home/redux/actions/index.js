import { GET_WEATHER_DATA } from './actionTypes';

import axios from 'axios';

const appKey = '2e045bacd9b4d0784e01640eb3babbd2';

const preUrl = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${appKey}&q=`;

export function getWeatherData(city) {
  let url = `${preUrl}${city}`;
  let response = axios.get(url);
  return {
    type: GET_WEATHER_DATA,
    payload: response
  };
}
