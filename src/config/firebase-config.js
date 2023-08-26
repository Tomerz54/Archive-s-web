import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBi2teyrVNVtn_q-1g8GZrVYOMZxKaIUYY",
  authDomain: "archive-s-web.firebaseapp.com",
  projectId: "archive-s-web",
  storageBucket: "archive-s-web.appspot.com",
  messagingSenderId: "1013983605388",
  appId: "1:1013983605388:web:103c9e647a99e929c141a9",
  measurementId: "G-1FMFEK07TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();