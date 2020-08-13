import React from "react";
import { Grid } from "@material-ui/core";
import CardComponent from "./card/card";
// import { Typography } from "@material-ui/core";

import styles from "./cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Total Number of Active Cases"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Total Number of Recoveries"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Total Number of Deaths"
        />
      </Grid>
      {/* <Typography color="textSecondary">
        {new Date(lastUpdate).toDateString()}
        {" "}
        {new Date(lastUpdate).toLocaleTimeString()}
      </Typography> */}
    </div>
  );
};
export default Cards;
