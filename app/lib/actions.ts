import { httpClient } from "~/lib/axios";
import { authStore } from "~/stores/auth.store";

export const loginAction = async (data: {
  email: string;
  password: string;
}) => {
  const res = await httpClient().post("/api/login", data);
  const store = authStore();
  store.setUser(res.data);
  localStorage.setItem("isAuthenticated", "true");
  return res.data;
};

export const logoutAction = async () => {
  const res = await httpClient().post("/api/logout");
  const store = authStore();
  store.setUser(null);
  localStorage.removeItem("isAuthenticated");
  return res.data;
};

export const getUserAction = async () => {
  const res = await httpClient().get("/api/user");
  const store = authStore();
  store.setUser(res.data);
  return res.data;
};

export const getSanctumCookieAction = async () => {
  const res = await httpClient().get("/sanctum/csrf-cookie");
  return res.data;
};
