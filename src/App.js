import React from "react";
import { Cards, Chart, Countries } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from "./images/Covidlogo.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    this.setState({ data: await fetchData() });
  }
  CountryHandler = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <Countries CountryHandler={this.CountryHandler} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;
