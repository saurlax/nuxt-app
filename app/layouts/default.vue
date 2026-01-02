<script setup lang="ts">
const route = useRoute();

const items = computed(() => [
  {
    label: "Tools",
    icon: "i-lucide-toolbox",
    to: "/tools/crypto",
    active: route.path.startsWith("/tools"),
  },
]);

const { data: subnavItems } = await useAsyncData(
  () => {
    return queryCollectionNavigation("tools")
      .where("path", "LIKE", `/${route.path.split("/")[1]}%`)
      .then((items) =>
        items[0]?.children?.map((item) => {
          return {
            label: item.title,
            to: item.path,
            active: route.path.startsWith(item.path),
          };
        })
      );
  },
  { watch: [route] }
);
</script>

<template>
  <UHeader class="h-[unset] [&>div:first-child]:h-(--ui-header-height)">
    <template #title>
      <Logo />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/saurlax/nuxt-app"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" />
      <USeparator class="my-2" type="dashed" />
      <UNavigationMenu :items="subnavItems" orientation="vertical" />
    </template>

    <template v-if="route.path !== '/'" #bottom>
      <USeparator />
      <UContainer>
        <UNavigationMenu :items="subnavItems" highlight />
      </UContainer>
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

<style scoped>
header {
  height: none !important;
}

header > div:first-child {
  height: var(--ui-header-height) !important;
}
</style>
