import styles from "./card.module.css";

export default function Card(props) {
  const { price, speed } = props;

  return (
    <div className={styles.card}>
      <div className={styles.item__header}>
        <h4 className="header-title">Безлимитный {price}</h4>
      </div>

      <div className={styles.item__main}>
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
          <p footer__text>Объём включённого трафика не ограничен</p>
        </div>
      </div>
    </div>
  );
}
