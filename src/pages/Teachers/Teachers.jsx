import React, { useState } from "react";

import styles from "./Teachers.module.scss";
import TeacherCard from "../../components/Card/Teacher/TeacherCard";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  return (
    <div className={styles.teachers}>
      {}
      <TeacherCard name={"Teacher 1"} totalStudents={24} />
    </div>
  );
};

export default Teachers;
