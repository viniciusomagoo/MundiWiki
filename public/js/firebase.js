import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB7ADtkR_i5XLRoDUbHtHhhuhXouv-Ruvs",
  authDomain: "mundiwiki.firebaseapp.com",
  projectId: "mundiwiki",
  storageBucket: "mundiwiki.firebasestorage.app",
  messagingSenderId: "383433477056",
  appId: "1:383433477056:web:66b3c871d003fb490a5625",
  measurementId: "G-18W2CSMWJN"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//firebase.js