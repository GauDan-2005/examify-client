import { enums } from "../../constants/enum";
import { images } from "../../constants/images";

// pages
import Dashboard from "../../pages/Dashboard/Dashboard";
import Quizes from "../../pages/Quizes/Quizes";
import Quiz from "../../pages/Quiz/Quiz";
import Teachers from "../../pages/Teachers/Teachers";

const STUDENT_ROUTES = [
  {
    path: "/user",
    routes: [
      {
        path: "/user/dashboard",
        name: enums.PAGE_TITLE.DASHBOARD,
        // icon: images.dashboard_sidebar,
        component: Dashboard,
        isSidebarMenu: true,
        isNavBar: true,
      },
      {
        path: "/user/quiz",
        name: enums.PAGE_TITLE.QUIZES,
        // icon: images.briefcase,
        component: Quizes,
        isSidebarMenu: true,
        isNavBar: true,
      },
      {
        path: "/user/teachers",
        name: enums.PAGE_TITLE.TEACHERS,
        // icon: images.briefcase,
        component: Teachers,
        isSidebarMenu: true,
        isNavBar: true,
      },
      {
        path: "/user/quiz/:quiz_id",
        name: enums.PAGE_TITLE.QUIZ,
        // icon: images.more_2,
        component: Quiz,
        isSidebarMenu: false,
        isNavBar: false,
      },
    ],
  },
];

export default STUDENT_ROUTES;
