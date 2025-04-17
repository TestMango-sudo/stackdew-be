// Firebase configuration

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// }

const firebaseConfig = {
  apiKey: "AIzaSyCTENgojUTamlfn6UX0pwIsHa8esbf8f9A",
  authDomain: "stackdewvalley-686c6.firebaseapp.com",
  projectId: "stackdewvalley-686c6",
  storageBucket: "stackdewvalley-686c6.firebasestorage.app",
  messagingSenderId: "906985778268",
  appId: "1:906985778268:web:6f85c946aca1668ee58a99",
  measurementId: "G-22YZG1YNKV"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

