// Your web app's Firebase configuration

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

