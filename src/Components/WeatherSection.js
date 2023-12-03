// WeatherSection.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherSection.css';  // Zaimportuj styl
import { Card, ListGroup } from 'react-bootstrap';

const WeatherSection = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '481f1707f6e4104b8ba01801baad8efb';
  const city = 'Warsaw';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [city, apiKey]);

  return (
    <div className="weather-section">
      <h2 className="weather-title">Aktualna Pogoda</h2>
      {weatherData && (
        <Card className="weather-card">
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Miasto: {weatherData.name}</ListGroup.Item>
              <ListGroup.Item>
                Temperatura: {Math.round(weatherData.main.temp - 273.15)}°C
              </ListGroup.Item>
              <ListGroup.Item>
                Wschód słońca: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
              </ListGroup.Item>
              <ListGroup.Item>
                Zachód słońca: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}
              </ListGroup.Item>
              <ListGroup.Item>Opis: {weatherData.weather[0].main}</ListGroup.Item>
              <ListGroup.Item>
                Jakość powietrza: {weatherData.main.humidity} %
              </ListGroup.Item>
            </ListGroup>
            <div className="weather-icon-container">
              <p>Graficzne przedstawienie pogody:</p>
              <img
                className="weather-icon"
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default WeatherSection;
