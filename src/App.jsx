import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Question from "./components/Question/Question";
import Quiz from "./pages/Quiz/Quiz";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import Login from "./pages/Login/Login";

import styles from "./App.module.scss";

function App() {
  const isLoggedIn = false;

  return (
    <div className={styles.app}>
      {/* <Router>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<>Home</>} />
            <Route path="/quiz/create" element={<></>} />
          </>
        ) : (
          <>Login</>
        )}
      </Router> */}
      {/* <StudentDashboard /> */}
      <Login />
    </div>
  );
}

export default App;
