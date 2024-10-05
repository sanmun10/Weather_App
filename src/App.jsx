// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Weather from "./Components/Weather";
import About from "./Components/Pages/About";
import "./styles/App.css";

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        setLoading(true);
        setError("");
        const API_KEY = "d80529a93fed14a08fd09e9b18c6ec87";
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
            );
            console.log(response.data);
            setWeatherData(response.data);
        } catch (error) {
            console.error("Error fetching the weather data", error);
            setError("Error fetching the weather data. Please check the location.");
        } finally {
            setLoading(false);
        }
    };

    //not understanding
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };
    //not understanding

    return (
        <Router>
            <div className="App">
                <h1>Weather App</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Enter location"
                                    />
                                    <button type="submit">Get Weather</button>
                                </form>
                                {loading && <p>Loading...</p>}
                                {error && <p className="error-message">{error}</p>}
                                {weatherData && <Weather weatherData={weatherData} />}
                            </>
                        }
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
