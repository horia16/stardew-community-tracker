<template>
  <headless-button
    class="
      bg-stardew-blue
      rounded
      cursor-pointer
      p-2
      block
      text-sm text-white
      transition
      shadow-lg
      hover:bg-stardew-blue-dark
      focus:(ring
      outline-none
      shadow-xl)
    "
  >
    <slot />
  </headless-button>
</template>
<script setup lang="ts">
import { HeadlessButton } from "vue-headless-ui";
</script>
