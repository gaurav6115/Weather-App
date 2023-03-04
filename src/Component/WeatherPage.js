import "./WeatherPage.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState();
  const [type, setType] = useState("C");
  const { state } = useParams();

  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // console.log(state)

  const apiKey = "0739138298214d8c86e35257230403";
  const handleType = (e) => {
    setType(e.target.value);
    // console.log(e.target.value)
  };

  const getDetails = () => {
    try {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${state}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setWeatherData(data);
          dispatch({
            type: "UPDATE_STATE",
            C: data.current?.temp_c,
            F: data.current?.temp_f,
          });
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
      <select value={type} onChange={handleType}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
      <div className="weatherDetail">
        <img src={weatherData?.current.condition.icon} />
        <div className="data">Location: {weatherData?.location.name}</div>
        <div className="data">
          Temperature:
          {type === "C" ? `${store.C} C` : `${store.F} F`}
        </div>
        <div className="data">
          Weather Condition: {weatherData?.current.condition.text}
        </div>
        <div className="data">Humidity: {weatherData?.current.humidity}</div>
        <div className="data">Cloud: {weatherData?.current.cloud}</div>
      </div>
    </div>
  );
};

export default WeatherPage;
