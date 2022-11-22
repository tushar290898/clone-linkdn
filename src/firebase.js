import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBv1qf34SF_RpI7fp4-mvePA85m2p3wAGo",
    authDomain: "linkdn-clone-5597b.firebaseapp.com",
    projectId: "linkdn-clone-5597b",
    storageBucket: "linkdn-clone-5597b.appspot.com",
    messagingSenderId: "202553012416",
    appId: "1:202553012416:web:1ddd5f17490e19f0a63d25",
    measurementId: "G-4LMQV4JRD9"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db, auth};