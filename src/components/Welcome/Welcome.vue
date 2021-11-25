<template>
  <modal v-model="isOpen" header="Welcome stranger!">
    <div>
      Hello! Stardew Tracker is meant to help you track your community center progress. You can even import your game
      save and now it supports remixed bundles as well.
    </div>
    <div class="text-lg font-bold mt-4 mb-2">How to use</div>
    <div class="overflow-hidden rounded-lg">
      <video src="@/assets/videos/tutorial-1.mp4" loop="true" muted autoplay="true"></video>
    </div>
    <div class="text-lg font-bold mt-4 mb-2">Changelog</div>
    <div class="rounded-lg bg-gray-300 p-4 flex flex-col gap-5">
      <div class="text-sm" v-for="log in changelog" :key="log.version">
        <div class="font-bold">Version: {{ log.version }}</div>
        <ul>
          <li v-for="(change, index) in log.changes" :key="index">
            {{ change }}
          </li>
        </ul>
      </div>
    </div>
  </modal>
</template>
<script setup lang="ts">
import changelog from "@/data/changelog";
import { ref } from "@vue/reactivity";
import Modal from "../Modal/Modal.vue";

const isOpen = ref(false);

setTimeout(() => {
  if (!localStorage.getItem("welcome")) {
    isOpen.value = true;
  }
  localStorage.setItem("welcome", "1");
}, 400);
</script>
