import { ref } from 'vue'
import { defineStore } from 'pinia'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { useRouter } from 'vue-router';
export const useAuthStore = defineStore('auth', () => {

  const router=useRouter()
  async function login({ email, password, name }) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log("dd:", userCredential.user)
        localStorage.setItem("userData", JSON.stringify({email:userCredential.user.email, password:userCredential.user.accessToken}))
       router.push('/dashboard')
        // user.value = userCredential.user;
      })
      .catch((error) => {
        console.log("error", error)
      });
  }

  function logout(){
    localStorage.removeItem('userData')
    router.push('/')

  }

  return {  logout, login}
})
