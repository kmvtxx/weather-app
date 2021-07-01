// WeatherReport Component
import React from "react";
let feels_like,
  temp,
  temp_max,
  temp_min = "";

const WeatherReport = ({ WR, u }) => {
  const calcUnit = (x) => {
    if (u === "F") {
      let y = Math.round((WR.feels_like * 5) / 6 + 32);
      return y;
    } else {
      return x;
    }
  };

  feels_like = calcUnit(WR.feels_like);
  temp = calcUnit(WR.temp);
  temp_min = calcUnit(WR.feels_like);
  temp_max = calcUnit(WR.temp_max);

  return (
    <div className="weather-report">
      <h2 className="big">{WR.location}</h2>
      <h3 className="conditions">
        {WR.conditions}| Feels like {feels_like}&deg;C
      </h3>
      <img alt={WR.conditions} src={WR.icon} className=""></img>
      <div className="temperature">
        <div>
          <p>Current temperature</p>
          <h2>
            {temp}&deg;{u}
          </h2>
        </div>
        <div>
          <p>Maximum temperature</p>
          <h2>
            {temp_max}&deg;{u}
          </h2>
        </div>
        <div>
          <p>Minimum temperature</p>
          <h2>
            {temp_min}&deg;{u}
          </h2>
        </div>
      </div>
      <div className="wind">
        <div>
          <p>Wind direction</p>
          <h2>{WR.wind_direction} degrees</h2>
        </div>
        <div>
          <p>Wind speed</p>
          <h2>{WR.wind_speed} meter/sec</h2>
        </div>
      </div>

      <div className="pressure">
        <div>
          <p>Pressure</p>
          <h2>{WR.pressure} hPa</h2>
        </div>
        <div>
          <p>Humidity</p>
          <h2>{WR.humidity}%</h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherReport;
