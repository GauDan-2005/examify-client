import { useState } from "react";

import DashboardCard from "../../../../components/Card/Dashboard/DashboardCard";
import Button from "../../../../components/Button/Button";

import { Chart, Note2, TickCircle, Timer } from "../../../../icons";

import styles from "./Student.module.scss";

const Student = () => {
  const [quizes, setQuizes] = useState([
    { id: 1, title: "quiz 1" },
    { id: 2, title: "quiz 1" },
    { id: 3, title: "quiz 1" },
    { id: 4, title: "quiz 1" },
    { id: 3, title: "quiz 1" },
    { id: 3, title: "quiz 1" },
    { id: 3, title: "quiz 1" },
    { id: 3, title: "quiz 1" },
  ]);

  return (
    <div className={styles.student_dashboard}>
      <div className={styles.card_wrappers}>
        <DashboardCard
          img={<Chart stroke="#7A68FF" size="44" />}
          stat={70}
          title={"Average Marks"}
          className={styles.avg_card}
        />
        <DashboardCard
          img={<Timer stroke="#E0C007" size="44" />}
          stat={5}
          title={"Upcoming Quiz"}
          className={styles.pending_card}
        />
        <DashboardCard
          img={<TickCircle stroke="#29DA30" size="44" />}
          stat={15}
          title={"Completed Quiz"}
          className={styles.completed_card}
        />
        <DashboardCard
          img={<Note2 stroke="#fff" size="44" />}
          stat={25}
          title={"Total Quiz"}
          className={styles.total_card}
        />
      </div>
      <div className={styles.title_wrapper}>
        <p className={styles.header_text}>Recent Quizes</p>
        <div className={styles.hr_line} />
      </div>
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

export default Student;
