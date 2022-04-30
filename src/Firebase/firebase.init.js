
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAOcs7Dxl1S9RpWk0vy_zLzZlkH2Qqlcik",
  authDomain: "grocery-stock-f2e6a.firebaseapp.com",
  projectId: "grocery-stock-f2e6a",
  storageBucket: "grocery-stock-f2e6a.appspot.com",
  messagingSenderId: "440416333593",
  appId: "1:440416333593:web:98733dec8664ff9d4adf88"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

