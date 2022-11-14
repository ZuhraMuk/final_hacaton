import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeCNXM_XwmLmpI0BHTXea9Mc3CmLRqyCs",
  authDomain: "final-hacaton.firebaseapp.com",
  projectId: "final-hacaton",
  storageBucket: "final-hacaton.appspot.com",
  messagingSenderId: "1077578983161",
  appId: "1:1077578983161:web:3787df36df372dec08a428",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
