<template>
    <div class="card">
      <p class="status">error: {{error.statusCode}}</p>
      <p >Ooops.</p>
      <p >{{error.statusMessage}}</p>
      <button class="btn " @click="handleError">Go Home...</button>
    </div>
  </template>
  
  <script setup>
    defineProps({error: Object})
    const handleError = () => clearError({ redirect: '/' })
  </script>

<style lang="scss" scoped>

.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    text-align: center;
    // margin: 0 auto;
    width: 300px;
    height: 300px;
    background-color: #d2caca;
    p{
        margin-top: 7px;
        font-size: large;
    }
    .btn{
        margin: 7px 0;
        background-color: #212427;
        color: #EEEEEE;
        border: none;
        width: 210px;
        min-height: 50px;
        border-radius:2rem ;
        margin: 1.5rem 0;
        font-weight: bold;
        cursor: pointer;
    }
}

</style>