import Button from "../../components/Button/Button";
import Question from "../../components/Question/Question";
import Timer from "../../components/Timer/Timer";
import styles from "./Quiz.module.scss";

const Quiz = () => {
  return (
    <div className={styles.quiz}>
      <div className={styles.sidebar}>
        <p className={styles.sidebar_title}>Question List</p>
        <div className={styles.sidebar_body}>
          <div className={styles.question_wrapper}>
            <p className={styles.question_title}>Question 1</p>
          </div>
          <div className={styles.question_wrapper}>
            <p className={styles.question_title}>Question 2</p>
          </div>
          <div className={styles.question_wrapper}>
            <p className={styles.question_title}>Question 3</p>
          </div>
          <div className={styles.question_wrapper}>
            <p className={styles.question_title}>Question 4</p>
          </div>
          <div className={styles.question_wrapper}>
            <p className={styles.question_title}>Question 5</p>
          </div>
          <div className={styles.question_wrapper}>
            <p className={styles.question_title}>Question 6</p>
          </div>
          <div className={styles.question_wrapper}>
            <p className={styles.question_title}>Question 7</p>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.topbar}>
          <div className={styles.main_container}>
            <p className={styles.time_header}>Time Left</p>
            <Timer timeLimit={60 * 60} />
          </div>
          <Button title="Quit quiz" className={styles.quit_btn} />
        </div>
        <Question />
        <div className={styles.action_wrapper}>
          <Button title="Previous" />
          <Button title="Save" />
          <Button title="Next" />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
