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
      loader: () => import(`./components/${props.p[1]}/${props.p[2]}.vue`),
      errorComponent: Error,
    }),
);
</script>

<template>
  {{ props.p }}
  {{ [...props.p].slice(1).join("/") }}
  <Content />
</template>
