import { useState } from "react";
import styles from "./Question.module.scss";

const Question = ({
  questionNumber = 1,
  questionText = "this is question 1.",
  options = [
    "a is option 1",
    "b is option 2",
    "c is option 3",
    "d is option 4",
  ],
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className={styles.question}>
      <div className={styles.question_text_wrapper}>
        <p className={styles.questionNumber}>{questionNumber}</p>
        <p className={styles.question_text}>{questionText}</p>
      </div>
      <div className={styles.body}>
        <p className={styles.body_heading}>Options</p>
        <div className={styles.options_wrapper}>
          {options?.map((option, index) => (
            <div
              key={option}
              className={styles.option_wrapper}
              onClick={() => setSelectedIndex(index)}
            >
              <p className={styles.option_text}>{option}</p>
              <input
                type="radio"
                checked={selectedIndex === index}
                className={styles.input}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
