import { defineStore } from "pinia";
import type { User } from "~/types";

export const authStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
  }),
  actions: {
    setUser(user: User | null) {
      this.user = user;
    },
  },
});
