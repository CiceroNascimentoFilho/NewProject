import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCbPxkaxi2F_YP8tajrUtJvJZaS6dfNqDI",

    authDomain: "mynewproject-3943b.firebaseapp.com",
  
    projectId: "mynewproject-3943b",
  
    storageBucket: "mynewproject-3943b.appspot.com",
  
    messagingSenderId: "1058969655143",
  
    appId: "1:1058969655143:web:75cdba8cfaa4d088b181c2",
  
    measurementId: "G-CQS4CYQNH1"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
