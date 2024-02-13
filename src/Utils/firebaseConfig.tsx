
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import firebase from 'firebase/compat/app';




export const firebaseConfig = {
  apiKey: "AIzaSyBySlFrKGIAnL0pZwS38bGnloq0sMToA7I",
  authDomain: "cwwm-5c648.firebaseapp.com",
  projectId: "cwwm-5c648",
  storageBucket: "cwwm-5c648.appspot.com",
  messagingSenderId: "321638531737",
  appId: "1:321638531737:web:ecc1aaebd2ddcb39e0ee08",
  measurementId: "G-2KNVSYHZHN"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)
export const txtDB = getFirestore(app)

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}