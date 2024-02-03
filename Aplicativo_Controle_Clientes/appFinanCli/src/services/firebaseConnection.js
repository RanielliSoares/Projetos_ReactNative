import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import 'firebase/database';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAIfYmdW9IPlNStgY5OOCYnxlY0JgUaliM",
    authDomain: "clientesapp-97a85.firebaseapp.com",
    projectId: "clientesapp-97a85",
    storageBucket: "clientesapp-97a85.appspot.com",
    messagingSenderId: "659410848871",
    appId: "1:659410848871:web:32e2e7cc71bf4123e0d8c2"
};

// Initialize Firebase

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default firebase;