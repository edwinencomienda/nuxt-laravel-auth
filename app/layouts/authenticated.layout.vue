<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { logoutAction } from "~/lib/actions";
import { authStore } from "~/stores/auth.store";

const auth = authStore();

const handleLogout = async () => {
  try {
    await logoutAction();
    await navigateTo("/auth/login");
  } catch (error) {
    console.error("Logout failed:", error);
    // Fallback: still navigate to login even if API call fails
    await navigateTo("/auth/login");
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="flex items-center space-x-4">
            <span class="text-sm text-gray-700">{{ auth.user?.name }}</span>
            <Button variant="outline" size="sm" @click="handleLogout">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
