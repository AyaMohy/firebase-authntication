<script setup>
import {useAuthStore} from './../stores/auth.js'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore=useAuthStore()
const eventInput=ref({
  email:'',
  password:''
})

async function login(){
    try{
        if(((eventInput.value.email).includes('@gmail.com')) && ((eventInput.value.password).length >6)){
            await authStore.login(eventInput.value)
        }
        else{
            alert('validation required')
        }
    }
    catch (error){
        console.log("error", error)
    }
}
</script>
<template>
     <form @submit.prevent="login" class="form_login">

      <div class="input_feild">
        <label>Email</label>
        <input type="email" v-model="eventInput.email"  required/>
      </div>

      <div  class="input_feild">
        <label>Password</label>
        <input type="password"  v-model="eventInput.password" required/>
      </div>

      <button type="submit"  class="btn_submit">Submit</button>
    </form>
</template>

<style scoped>
.form_login{
    margin: 50px auto;
    width: 600px;
    border: 1px solid #eee;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 50px;
}
.input_feild{
    margin-top: 10px;
}
label{
    display: inline-block;
    width: 200px;
}
input{
    min-width: 300px ;
}
.btn_submit{
    width: 200px;
    background-color: rgb(83, 83, 184);
    color: #fff;
    margin-top: 10px;
    padding: 6px;
    border: none !important;
    outline: none !important;
    border-radius: 5px;
    cursor: pointer;
}
</style>