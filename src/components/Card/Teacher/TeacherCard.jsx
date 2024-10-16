import styles from "./TeacherCard.module.scss";
import { ReactComponent as Avatar } from "../../../assets/avatar.svg";

const TeacherCard = ({ img_url, name, totalStudents, subjectName }) => {
  return (
    <div className={styles.teacher_card}>
      <img src={img_url ? img_url : Avatar} alt="" />
      <div className={styles.teacher_data}>
        <p className={styles.name}>{name}</p>
        <div className={styles.info_wrapper}>
          <p className={styles.subject}></p>
          <p className={styles.students}></p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
