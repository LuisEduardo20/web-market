import type { RouteRecordRaw } from "vue-router";

const AuthRoutes: RouteRecordRaw = {
  path: "/",
  component: () => import("@/layouts/privateLayout/privateLayout.vue"),
  children: [
    // {
    //   name: "LoginView",
    //   path: "/login",
    //   component: () => import("@/views/LoginView/LoginView.vue"),
    //   meta: { currentIndex: "login" },
    // },
    // {
    //   name: "ResetView",
    //   path: "/resetPassword",
    //   component: () => import("@/views/ResetPassword/ResetPassword.vue"),
    //   meta: { currentIndex: "reset" },
    // },
  ],
};

export default AuthRoutes;
