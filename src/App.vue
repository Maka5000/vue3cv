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
    transition: .2s all ease-in-out;
    transform: translateX(0);
    z-index: 0;
  }

  section:first-child {
    margin: 0;
  }

  section {
    margin-top: 25px;
    border-bottom: 5px solid white;
    padding-bottom: 25px;
  }

  section:last-child {
    border: none;
  }

  h2 {
    font-size: 35px;
  }
</style>