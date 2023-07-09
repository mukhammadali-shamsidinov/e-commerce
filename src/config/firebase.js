import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
import {getStorage} from 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF30UwJOV-ME1NHiksWF1kBC4MKZXMQGU",
    authDomain: "commerce-3f468.firebaseapp.com",
    projectId: "commerce-3f468",
    storageBucket: "commerce-3f468.appspot.com",
    messagingSenderId: "135324753470",
    appId: "1:135324753470:web:ca49ad1c227e8a63f63b6f",
    measurementId: "G-1V30Y8GLYP"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const auth = getAuth(app)
  const storage = getStorage(app)
  export {db,auth,storage}