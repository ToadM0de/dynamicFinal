import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL5czJ5_OWAd79pJ1DA8qLAzO7kNPoR4g",
  authDomain: "mobiletestdatabase.firebaseapp.com",
  projectId: "mobiletestdatabase",
  storageBucket: "mobiletestdatabase.firebasestorage.app",
  messagingSenderId: "674806773570",
  appId: "1:674806773570:web:6077a089a7b2363e973adb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
