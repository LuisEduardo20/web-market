import type { RouteRecordRaw } from "vue-router";

const AuthRoutes: RouteRecordRaw = {
  path: "/",
  component: () => import("@/layouts/publicLayout/publicLayout.vue"),
  children: [
    {
      name: "LoginView",
      path: "/login",
      component: () => import("@/views/Login/Login.vue"),
      meta: { currentIndex: "auth/login" },
    },
    {
      name: "RegisterView",
      path: "/register",
      component: () => import("@/views/Register/Register.vue"),
      meta: { currentIndex: "auth/register" },
    },
    // {
    //   name: "ResetView",
    //   path: "/resetPassword",
    //   component: () => import("@/views/ResetPassword/ResetPassword.vue"),
    //   meta: { currentIndex: "reset" },
    // },
  ],
};

export default AuthRoutes;
