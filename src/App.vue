<script setup>
import { computed } from 'vue'
import { AppState } from './AppState'

const appState = computed(() => AppState)

</script>

<template>
  <main>
<RatKing/>
<Scoreboard/>
  </main>
   <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}

main{
  background-image: url('https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: center;
  background-size: cover;
}
</style>
