<template>
  <div class="time__box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TimerBox'
}
</script>

<style scoped>
.time__box {
  background: #000;
  padding: 5px;
  color: white;
}
</style>