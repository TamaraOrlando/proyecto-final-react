import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDo2LrbsvndQfXid94FCvVd2-eN_dMhRSg",
  authDomain: "react-proyect-f649a.firebaseapp.com",
  projectId: "react-proyect-f649a",
  storageBucket: "react-proyect-f649a.appspot.com",
  messagingSenderId: "361695793012",
  appId: "1:361695793012:web:9c6e1ea759062d7362e621"
};



initializeApp(firebaseConfig);

const db = getFirestore()

export default db;