import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBhnz_whUdqaTB896XYzdkMTV4Oz9T5f88",
  authDomain: "anime-plus-937b5.firebaseapp.com",
  projectId: "anime-plus-937b5",
  storageBucket: "anime-plus-937b5.appspot.com",
  messagingSenderId: "678124948372",
  appId: "1:678124948372:web:ed28567bb5a872da969d81",
  measurementId: "G-VE2ETF7HL4"
};



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;
