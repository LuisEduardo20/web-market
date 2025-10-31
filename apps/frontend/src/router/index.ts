import pinia from "@/store/instance";
import { useAuthStore } from "@/store/authStore";
import { createRouter, createWebHistory } from "vue-router";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [publicRoutes, privateRoutes],
});

router.beforeEach((to, from, next) => {
  const { token } = useAuthStore(pinia);

  if (to.name === "ResetView") {
    next();
  }

  if (!token && to.name !== "LoginView") {
    next({ name: "LoginView" });
    return;
  }

  if (token && to.name === "LoginView") {
    next({ path: "/" });
    return;
  }

  next();
});

export default router;
