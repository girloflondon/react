import { useState } from "react";
import styles from "./card.module.css";

export default function Card({ price, speed, theme }) {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected(!selected)}
      className={`${styles.card} ${selected ? styles.cardSelected : ""}`}
    >
      <div className={theme.item__header}>
        <h4 className="header-title">Безлимитный {price}</h4>
      </div>

      <div className={theme.item__main}>
        <p className={styles.main__text}>
          <span className={styles.main__upperText}>руб </span>
          {price}
          <span className={styles.main__lowerText}> /мес</span>
        </p>
      </div>

      <div className={styles.item__footer}>
        <div className={styles.footer__top}>
          <p className="footer__text">до {speed} Мбит/сек</p>
        </div>
        <div className={styles.footer__bottom}>
          <p>Объём включённого трафика не ограничен</p>
        </div>
      </div>
    </div>
  );
}
