// src/Components/About.js
import React from 'react';
import "../../styles/About.css"

const About = () => {
    return (
        <div className="about">
            <h2>About This App</h2>
            <p>
                This is a simple weather app that provides real-time weather information for various locations around the world.
                Users can search for their desired city and receive accurate weather data, including temperature, humidity, wind speed, and more.
            </p>

            <h3>Features</h3>
            <ul>
                <li>Real-time weather updates using the OpenWeather API</li>
                <li>Search for weather information by city name</li>
                <li>Displays detailed weather data including temperature, humidity, and pressure</li>
                <li>User-friendly interface with a clean design</li>
                <li>Responsive layout for mobile and desktop users</li>
            </ul>

            <h3>Technologies Used</h3>
            <p>This app is built using the following technologies:</p>
            <ul>
                <li>React.js - For building the user interface</li>
                <li>Axios - For making HTTP requests to the weather API</li>
                <li>CSS - For styling the components</li>
                <li>Vite - For faster development and build process</li>
            </ul>

            <h3>Credits</h3>
            <p>
                This app uses data from the <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeather API</a>.
                Special thanks to the developers for providing free access to weather data.
            </p>

            <p>Built by Prince|<a href='https://github.com/sanmun10<'>GitHub</a></p>
        </div>
    );
};

export default About;




