<template>
  <div class="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
import router from "@/router";

export default {
  methods: {
    router() {
      return router
    }
  }
}
</script>

<style >
body,
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: navajowhite;
}

</style>