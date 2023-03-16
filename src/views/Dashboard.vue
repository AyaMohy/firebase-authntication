<script setup>
import {useAuthStore} from '../stores/auth';

const authStore=useAuthStore()
let user =localStorage.getItem('userData')
const logout=()=>{
  authStore.logout()
}
</script>

<template>
  <div class="about">
    <h1>Hello:  {{ (JSON.parse(user)).email }}</h1>

   <button  @click="logout"  class="btn_logout">Logout</button>

  </div>
</template>

<style>
.btn_logout{
  width: 200px;
    background-color: rgb(194, 52, 52);
    color: #fff;
    margin-top: 10px;
    padding: 6px;
    border: none !important;
    outline: none !important;
    border-radius: 5px;
    cursor: pointer;

}
</style>
