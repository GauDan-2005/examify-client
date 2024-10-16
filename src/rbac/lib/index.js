import STUDENT_ROUTES from "./user";
import ADMIN_ROUTES from "./admin";
import AUTH_ROUTES from "./auth";
import TEACHER_ROUTES from "./teacher";

export const ROLE_ROUTES = {
  student: STUDENT_ROUTES,
  admin: ADMIN_ROUTES,
  teacher: TEACHER_ROUTES,
  auth: AUTH_ROUTES,
};
