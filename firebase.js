// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2OaIKABe2Jv2-w7jEMeGR9VM9Tm6xac8",
  authDomain: "adjun-web.firebaseapp.com",
  projectId: "adjun-web",
  storageBucket: "adjun-web.appspot.com",
  messagingSenderId: "614635708531",
  appId: "1:614635708531:web:acc1a5b866d1192f7f4a06",
  measurementId: "G-1TR3N5MS1N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
