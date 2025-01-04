<script setup>
import { defineAsyncComponent, computed } from "vue";
import Error from "./components/Error.vue";
const props = defineProps({
  p: [String],
});

const Content = computed(
  () =>
    props.p &&
    defineAsyncComponent({
      loader: () => import(`./components/${[...props.p].join("/")}.vue`),
      errorComponent: Error,
    }),
);
</script>

<template>
  <Content />
</template>
