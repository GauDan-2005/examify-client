import styles from "./DashboardCard.module.scss";

const DashboardCard = ({ stat, title, img, className }) => {
  return (
    <div className={`${styles.dashboard_card} ${className ? className : ""}`}>
      <div className={styles.data}>
        <p className={styles.stat}>{stat}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.img_wrapper}>{img ? img : null}</div>
    </div>
  );
};

export default DashboardCard;
