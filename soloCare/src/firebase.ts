// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkNbwyMc9LhR0AK_-ciLPXvjUBMgLLa24",
  authDomain: "solocare-app.firebaseapp.com",
  projectId: "solocare-app",
  storageBucket: "solocare-app.appspot.com",
  messagingSenderId: "227171276884",
  appId: "1:227171276884:web:d5130c5242d147c8b435c1",
  measurementId: "G-GL8JMDL0G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);