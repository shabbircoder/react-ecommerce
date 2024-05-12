
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBDYRsvIGN_T62yASZpphK7xhiB_h2O_VA",
  authDomain: "ecommece-5967c.firebaseapp.com",
  projectId: "ecommece-5967c",
  storageBucket: "ecommece-5967c.appspot.com",
  messagingSenderId: "659905315807",
  appId: "1:659905315807:web:e94ddbb444be8043b23a6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth } 