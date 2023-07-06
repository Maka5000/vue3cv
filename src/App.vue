<script setup>
import { RouterView } from "vue-router";
import LeftPanel from "./components/LeftPanel.vue";
import MiddlePanel from "./components/MiddlePanel.vue";
</script>

<template>
  <main>
    <LeftPanel />
    <MiddlePanel />
    <div class="right-panel">
      <router-view />
    </div>
  </main>
</template>

<style>
  main {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 10% 40% 50%;
    min-height: 100vh;
  }

  .right-panel {
    padding: 25px 40px;
    margin: 30px 0;
    background-color: blue;
  }

  section:first-child {
    margin: 0;
  }

  section {
    margin-top: 25px;
    border-bottom: 1px solid gray;
    padding-bottom: 25px;
  }

  h2 {
    font-size: 35px;
  }
</style>
