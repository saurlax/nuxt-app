<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(
  () => {
    return queryCollection("tools").path(route.path).first();
  },
  { watch: [route] }
);
definePageMeta({
  layout: "tools",
});
</script>

<template>
  <div v-if="data">
    <UPageHeader :title="data.title" :description="data.description" />
    <UPageBody>
      <ContentRenderer :value="data.body" />
    </UPageBody>
  </div>
</template>
