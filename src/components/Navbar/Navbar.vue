<template>
  <nav class="p-4 px-8 bg-white bg-opacity-80 backdrop-blur backdrop-filter shadow flex justify-between">
    <game-loader />
    <options />
  </nav>
</template>
<script setup lang="ts">
import GameLoader from "../GameLoader/GameLoader.vue";
import Options from "../Options/Options.vue";
</script>
