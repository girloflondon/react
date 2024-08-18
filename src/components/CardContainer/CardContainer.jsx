import React from "react";
import styles from "./cardContainer.module.css";
import Card from "../Card/Card";
import tariffs from "../../tariffs";

export default function cardContainer() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        {tariffs.map((item) => (
          <Card id={item.id} {...item} />
        ))}
      </div>
    </React.Fragment>
  );
}
