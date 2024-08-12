import React from "react";
import styles from "./cardContainer.module.css";
import Card from "../Card/Card";
import themeBlue from "../Card/theme-blue.module.css";
import themeGreen from "../Card/theme-green.module.css";
import themeRed from "../Card/theme-red.module.css";
import themeBlack from "../Card/theme-black.module.css";

export default function cardContainer() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <Card price="300" speed="10" theme={themeBlue} />
        <Card price="450" speed="50" theme={themeGreen} />
        <Card price="550" speed="100" theme={themeRed} />
        <Card price="1000" speed="200" theme={themeBlack} />
      </div>
    </React.Fragment>
  );
}
