import "./WeatherPage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState();
  const { state } = useParams();
  // console.log(state)

  const apiKey = "0739138298214d8c86e35257230403";

  const getDetails = () => {
    try {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${state}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setWeatherData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
  getDetails();
  }, []);

  return (
    <div className="weatherDetailContainer">
      <h1 className="detailHeading">Weather Data</h1>
      <select>
        <option>Celsius</option>
        <option>Fahrenheit</option>
      </select>
      <div className="weatherDetail">
        <img src = {weatherData?.current.condition.icon}/>
        <div className="data">Location: {weatherData?.location.name} {weatherData?.location.country}</div>
        <div className="data">Temperature: {weatherData?.current.feelslike_c}</div>
        <div className="data">Weather Condition: {weatherData?.current.condition.text}</div>
      </div>
    </div>
  );
};

export default WeatherPage;
