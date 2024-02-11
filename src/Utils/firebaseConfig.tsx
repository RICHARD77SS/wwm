
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getStorage, ref, listAll, list } from "firebase/storage"
import { getFirestore } from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBySlFrKGIAnL0pZwS38bGnloq0sMToA7I",
  authDomain: "cwwm-5c648.firebaseapp.com",
  projectId: "cwwm-5c648",
  storageBucket: "cwwm-5c648.appspot.com",
  messagingSenderId: "321638531737",
  appId: "1:321638531737:web:ecc1aaebd2ddcb39e0ee08",
  measurementId: "G-2KNVSYHZHN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage()
export const txtDB = getFirestore(app)




