import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCk-KQJONasKRbUA7EaeTLTevTJCe3wxeA",
    authDomain: "movie-application-45f03.firebaseapp.com",
    projectId: "movie-application-45f03",
    storageBucket: "movie-application-45f03.appspot.com",
    messagingSenderId: "740413599626",
    appId: "1:740413599626:web:8323a69e234909a6e9a273",
    measurementId: "G-WGFQQWDVQG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

//This For Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { auth, provider };