import React, { Component, useEffect } from "react";
import Input from "./components/Input.js";
import WeatherReport from "./components/WeatherReport.js";
import SearchResults from "./components/SearchResults.js";
import { debounce } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedCities: [],
      weatherReport: {},
      unit: "C",
    };
  }

  initialFetch = async () => {
    const fetchData = await fetch(
      "https://api.weatherserver.com/weather/current/1277333/C"
    );
    const jsonData = await fetchData.json();
    console.log(jsonData)
    this.setState({ weatherReport: jsonData, fetchedCities: [] });
  };

  componentDidMount() {
    this.initialFetch();
  }

  inputChange = debounce((loc) => {
    this.setState({ location: loc });
            this.fetchData(loc);
  }, 0);

  fetchData = async (loc) => {
    const fetchCities = await fetch(
      "https://api.weatherserver.com/weather/cities/" + loc
    );
    console.log("https://api.weatherserver.com/weather/cities/" + loc);
    const jsonData = await fetchCities.json();
    this.setState({ fetchedCities: jsonData });
    console.log(this.state.fetchedCities.results);
  };

  showData = async (city) => {
    this.state.isLoading = true;
    const fetchData = await fetch(
      "https://api.weatherserver.com/weather/current/" +
        city +
        "/" +
        this.state.unit
    );
    const jsonData = await fetchData.json();
    console.log(this.state.isLoading);
    this.setState({
      weatherReport: jsonData,
      fetchedCities: [],
      isLoading: false,
    });
  };

  render() {
    if (this.state.isLoading === true) {
      return <div className="is-loading" />;
    } else {
      return (
        <div className="weather-app">
          <h1>WeatherWatch</h1>
          <Input
            location={this.inputChange}
            unit={(u) => {
              console.log(u);
              this.setState({ unit: u });
            }}
          ></Input>
          <SearchResults
            cities={this.state.fetchedCities}
            showData={(city) => this.showData(city)}
          ></SearchResults>
          <WeatherReport
            u={this.state.unit}
            WR={this.state.weatherReport}
          ></WeatherReport>
        </div>
      );
    }
  }
}

export default App;
