// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZMluXlsADwzjkDjv8GJEW14VHZNm6Afg",
  authDomain: "todo-list-b8388.firebaseapp.com",
  projectId: "todo-list-b8388",
  storageBucket: "todo-list-b8388.appspot.com",
  messagingSenderId: "479194695736",
  appId: "1:479194695736:web:8c65cdc0b34f025a92fecd",
  measurementId: "G-R1935ZKL0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db};