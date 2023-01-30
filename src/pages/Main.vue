<template>
  <div class="main__page">
    <h1>Welcome to the "CARD GAME"</h1>
    <button class="router__class" @click="$router.push('/game')">OPEN</button>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
h1 {
  width: 500px;
  text-align: center;
  padding: 20px;
  font-size: 50px;
}
.main__page {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.router__class {
  display: block;
  font-size: 30px;
  font-weight: 700;
  padding: 10px 50px;
  background: #4949d0;
  border: none;
  border-radius: 5px;
  color: #ffff15;
  transition: all 0.5s ;
  box-shadow: 0 0 10px 5px #7b7bc4
}
.router__class:hover{
  background: #8a8ad0;
  color: darkred;
  box-shadow: none;
}
</style>