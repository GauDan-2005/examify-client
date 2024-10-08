import { useState } from "react";
import styles from "./StudentDashboard.module.scss";
import Button from "../../components/Button/Button";

const StudentDashboard = () => {
  const [quizes, setQuizes] = useState([
    { id: 1, title: "quiz 1" },
    { id: 2, title: "quiz 1" },
    { id: 3, title: "quiz 1" },
    { id: 4, title: "quiz 1" },
  ]);
  return (
    <div className={styles.student_dashboard}>
      <p className={styles.header_text}>All Quizes</p>
      <div className={styles.body}>
        {quizes.map((quiz) => (
          <div key={quiz.id} className={styles.quiz_wrapper}>
            <p className={styles.title}>{quiz.title}</p>
            <Button title={"Play"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
