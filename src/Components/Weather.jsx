// src/Components/Weather.js
import React from 'react';

const Weather = ({ weatherData, error }) => {

    if (!weatherData && !error) return <p>Loading...</p>;


    if (error) {
        return <p className="error-message">{error}</p>;
    }


    if (!weatherData) return null;


    const { name, main, wind, weather, visibility, dt } = weatherData;


    if (!main || !wind || !weather) {
        return <p className="error-message">Weather data is not available.</p>;
    }


    const temp = main.temp;
    const humidity = main.humidity;
    const pressure = main.pressure;
    const windSpeed = wind.speed;
    const weatherDescription = weather[0].description;
    const visibilityInKm = visibility / 1000;
    const date = new Date(dt * 1000).toLocaleString();

    return (
        <div className="weather">
            <h2>{name}</h2>
            <p>Temperature: {temp}°C</p>
            <p>Weather: {weatherDescription}</p>
            <p>Humidity: {humidity}%</p>
            <p>Pressure: {pressure} hPa</p>
            <p>Wind Speed: {windSpeed} m/s</p>
            <p>Visibility: {visibilityInKm} km</p>
            <p>Last Updated: {date}</p>
        </div>
    );
};

export default Weather;
