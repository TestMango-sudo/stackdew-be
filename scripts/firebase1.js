const {initializeApp} = require("firebase/app")
const {getFirestore, doc, setDoc} = require("firebase/firestore")


// Firebase configuration
const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID
} = process.env

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};

let app

const InitializeFirebaseApp = () => {
  try {
    app = initializeApp(firebaseConfig)
    db = getFirestore();
    return app
  } catch(err){
    console.log(err.message)
  }
}

const getFirebaseApp = () => app;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
//const db = firebase.firestore();

module.exports = {InitializeFirebaseApp, getFirebaseApp}