<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  getSanctumCookieAction,
  getUserAction,
  loginAction,
} from "~/lib/actions";
import { authStore } from "~/stores/auth.store";

definePageMeta({
  layout: "guest-layout",
});

const form = ref({
  email: "edwin@email.com",
  password: "password",
});

const isLoading = ref(false);
const store = authStore();

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  await getSanctumCookieAction();
  await loginAction(form.value);
  await getUserAction();
  navigateTo("/dashboard");
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <Card class="w-full max-w-md">
      {{ store.user }}
      <CardHeader>
        <CardTitle class="text-center text-xl font-semibold">
          Sign In
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form class="space-y-4" @submit="handleSubmit">
          <Input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <Input
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <Button
            type="submit"
            class="w-full"
            :disabled="isLoading || !form.email || !form.password"
          >
            Sign In
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
