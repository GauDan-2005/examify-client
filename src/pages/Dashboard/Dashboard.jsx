import { useSelector } from "react-redux";

import Admin from "./components/AdminDashboard/Admin";
import Teacher from "./components/TeacherDashboard/Teacher";
import Student from "./components/StudentDashboard/Student";

import { enums } from "../../constants/enum";

const Dashboard = () => {
  const USER_DATA = useSelector((state) => state.user?.user);

  const renderDashboard = () => {
    switch (USER_DATA?.role) {
      case enums.ROLES.ADMIN:
        return <Admin />;
      case enums.ROLES.TEACHER:
        return <Teacher />;
      case enums.ROLES.STUDENT:
        return <Student />;

      default:
        break;
    }
  };

  return renderDashboard();
};

export default Dashboard;
