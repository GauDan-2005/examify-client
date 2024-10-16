import { images } from "../../constants/images";

// pages
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

const AUTH_ROUTES = [
  {
    path: "/auth",
    routes: [
      {
        path: "/auth/login",
        name: "login",
        // icon: images.more_2,
        component: Login,
        isSidebarMenu: false,
        isNavBar: false,
      },
      {
        path: "/auth/register",
        name: "register",
        // icon: images.more_2,
        component: Register,
        isSidebarMenu: false,
        isNavBar: false,
      },
    ],
  },
];

export default AUTH_ROUTES;
