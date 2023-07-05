<script setup>
import LeftPanel from "./components/LeftPanel.vue";
import { RouterView } from "vue-router";
import MiddlePanel from "./components/MiddlePanel.vue";
</script>

<template>
  <main>
    <LeftPanel />
    <MiddlePanel />
    <router-view />
  </main>
</template>

<style scoped>

  main {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 10% 40% 50%;
    min-height: 100vh;
  }

</style>
