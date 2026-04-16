import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBYWbTAbRt8hgueV2JKjKHKKfdzKB_zNcM",
  authDomain: "tecstem123.firebaseapp.com",
  projectId: "tecstem123",
  storageBucket: "tecstem123.firebasestorage.app",
  messagingSenderId: "729375502983",
  appId: "1:729375502983:web:e9b7564e86599c35e4fe22"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);