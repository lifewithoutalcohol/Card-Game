<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BoxStyle'
}
</script>

<style scoped>
.box {
  position: relative;
  width: 500px;
  border: 3px solid #363636;
  border-radius: 8px;
  margin: 5px;
  padding: 7px;
  display: flex;

}
</style>