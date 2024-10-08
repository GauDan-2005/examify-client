import styles from "./Button.module.scss";

const Button = ({ title, onClick, className }) => {
  return (
    <div onClick={onClick} className={`${styles.btn} ${className}`}>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Button;
