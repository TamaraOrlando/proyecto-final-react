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



// const firebaseConfig = {
//   apiKey: "AIzaSyA65J9FXYXXt7E_NEuX9xLZN6Vr7B6-Luw",
//   authDomain: "proyecto-final-react-6d710.firebaseapp.com",
//   projectId: "proyecto-final-react-6d710",
//   storageBucket: "proyecto-final-react-6d710.appspot.com",
//   messagingSenderId: "826062119490",
//   appId: "1:826062119490:web:fe7720c577b87808f683db"
// };


initializeApp(firebaseConfig);

const db = getFirestore()

export default db;