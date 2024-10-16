import { enums } from "../../constants/enum";
import { images } from "../../constants/images";

// pages
import Teachers from "../../pages/Teachers/Teachers";
import Students from "../../pages/Students/Students";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Quizes from "../../pages/Quizes/Quizes";

const ADMIN_ROUTES = [
  {
    path: "/admin",
    routes: [
      {
        path: "/admin/dashboard",
        name: enums.PAGE_TITLE.DASHBOARD,
        // icon: images.more_2,
        component: Dashboard,
        isSidebarMenu: true,
        isNavBar: true,
      },

      {
        path: "/admin/quizes",
        name: enums.PAGE_TITLE.QUIZES,
        // icon: images.more_2,
        component: Quizes,
        isSidebarMenu: true,
        isNavBar: true,
      },
      {
        path: "/admin/students",
        name: enums.PAGE_TITLE.STUDENTS,
        // icon: images.more_2,
        component: Students,
        isSidebarMenu: true,
        isNavBar: true,
      },
      {
        path: "/admin/teachers",
        name: enums.PAGE_TITLE.TEACHERS,
        // icon: images.more_2,
        component: Teachers,
        isSidebarMenu: true,
        isNavBar: true,
      },
    ],
  },
];

export default ADMIN_ROUTES;
