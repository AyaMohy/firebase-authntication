// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVnOKfESQT_66b2EOkfQVJ0KopNjcbu0A",
  authDomain: "authintication-vue.firebaseapp.com",
  projectId: "authintication-vue",
  storageBucket: "authintication-vue.appspot.com",
  messagingSenderId: "711656395259",
  appId: "1:711656395259:web:30aaf8dcfa047d808a3b5e",
  measurementId: "G-VHRSB1HXEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth}
// export default app