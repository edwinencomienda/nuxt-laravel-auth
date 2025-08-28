import { getUserAction } from "~/lib/actions";
import { isAuthenticated } from "~/lib/utils";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = authStore();

  if (!store.user && isAuthenticated()) {
    try {
      await getUserAction();

      if (to.path.startsWith("/auth")) {
        return navigateTo("/dashboard");
      }
    } catch (error) {
      if (!to.path.startsWith("/auth")) {
        return navigateTo("/auth/login");
      }
    }
  } else if (!store.user && !to.path.startsWith("/auth")) {
    return navigateTo("/auth/login");
  } else if (store.user && to.path.startsWith("/auth")) {
    return navigateTo("/dashboard");
  }
});
