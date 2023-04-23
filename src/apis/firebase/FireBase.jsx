import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBZE4Al6be9oWI2SluFZ0OSyk0WBfhf4g0",
  authDomain: "makethehouse-d905c.firebaseapp.com",
  projectId: "makethehouse-d905c",
  storageBucket: "makethehouse-d905c.appspot.com",
  messagingSenderId: "311841275099",
  appId: "1:311841275099:web:0dcbd490890cc6f520a0fe",
};
  //! initialize firebase

let firebase = initializeApp(firebaseConfig);
export let auth = getAuth(firebase);
export let database = getDatabase(firebase);
export let storage = getStorage(firebase);