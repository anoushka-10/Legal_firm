// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtjOG_1z_hHrtPJ9-FRpM_8lI9m0OIduk",
  authDomain: "sgrrstorage.firebaseapp.com",
  projectId: "sgrrstorage",
  storageBucket: "sgrrstorage.firebasestorage.app",
  messagingSenderId: "965180101640",
  appId: "1:965180101640:web:582decbf00c4d92df12dbd",
  measurementId: "G-774YQMMXM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);