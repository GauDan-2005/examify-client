// pages
import Students from "../../pages/Students/Students";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Quizes from "../../pages/Quizes/Quizes";

import { images } from "../../constants/images";
import { enums } from "../../constants/enum";

const TEACHER_ROUTES = [
  {
    path: "/teacher",
    routes: [
      {
        path: "/teacher/dashboard",
        name: enums.PAGE_TITLE.DASHBOARD,
        // icon: images.more_2,
        component: Dashboard,
        isSidebarMenu: true,
        isNavBar: true,
      },
      {
        path: "/teacher/quizes",
        name: enums.PAGE_TITLE.QUIZES,
        // icon: images.more_2,
        component: Quizes,
        isSidebarMenu: true,
        isNavBar: true,
      },
      {
        path: "/teacher/students",
        name: enums.PAGE_TITLE.STUDENTS,
        // icon: images.more_2,
        component: Students,
        isSidebarMenu: true,
        isNavBar: true,
      },
    ],
  },
];

export default TEACHER_ROUTES;
