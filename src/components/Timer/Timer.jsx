import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";

const Timer = ({ timeLimit }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1); // Decrement time
      }, 1000);

      // Cleanup the timeout when the component unmounts or timeLeft changes
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  // Format the time into minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} : ${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div className={styles.timer}>
      <p className={styles.time}>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default Timer;
