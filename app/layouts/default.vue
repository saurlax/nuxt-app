<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "About",
    to: "https://saurlax.com/",
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <Logo class="size-8" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/saurlax/app.saurlax.com"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
    </template>
  </UHeader>
  <UMain>
    <slot />
  </UMain>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} Saurlax
      </p>
    </template>
  </UFooter>
</template>
