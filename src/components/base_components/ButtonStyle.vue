<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonStyle'
}
</script>

<style scoped>
.btn {
  background: #007c8c;
  color: white;
  font-weight: 700;
  letter-spacing: 1.2px;
  padding: 5px 10px;
  border: none;
}
</style>