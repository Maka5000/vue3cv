<script setup>
  import { RouterView } from "vue-router";
  import LeftPanel from "./components/LeftPanel.vue";
  import MiddlePanel from "./components/MiddlePanel.vue";
  import MenuBar from "./components/MenuBar.vue"

  if(localStorage.getItem("switchStatus")) {
    if(localStorage.getItem("switchStatus") === 'false') {
      document.querySelector("html").classList.add("dark-mode")
    } else {
      document.querySelector("html").classList.remove("dark-mode")
    }
  } else {
    document.querySelector("html").classList.remove("dark-mode")
  }
</script>

<template>
  <main>
    <MenuBar />
    <LeftPanel />
    <MiddlePanel />
    <div class="right-panel">
      <router-view />
    </div>
  </main>
</template>

<style>

  html {
    background-color: var(--background-color);
    color: var(--font-color)
  }

  .menu-bar {
    display: none;
  }

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
    background-color: var(--main-color);
    transition: .2s all ease-in-out;
    transform: translateX(0);
    z-index: 0;
  }

  section:first-child {
    margin: 0;
  }

  section {
    margin-top: 25px;
    border-bottom: 5px solid var(--line-color);
    padding-bottom: 25px;
  }

  section:last-child {
    border: none;
  }

  h2 {
    font-size: 35px;
  }

  @media (max-width: 768px) {
    main {
      display: flex;
      flex-direction: column;
      position: relative;
    }
    
    .photo {
      height: 100vh;
    }

    .right-panel {
      margin: 0;
      padding: 25px 30px 25px 30px;
    }
  }
</style>