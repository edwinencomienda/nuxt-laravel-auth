<script setup lang="ts">
import { authStore } from "~/stores/auth.store";

definePageMeta({
  layout: "authenticated-layout",
});
const auth = authStore();
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to the dashboard {{ auth.user?.name }}</p>
  </div>
</template>
