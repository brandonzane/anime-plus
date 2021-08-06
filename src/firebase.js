import firebase from "firebase"

const firebaseConfig = {

    apiKey: "AIzaSyC8E_TSP6U36UISz-yLIl7Quw4qQ5d-YFg",
    authDomain: "anime-plus-bb54d.firebaseapp.com",
    projectId: "anime-plus-bb54d",
    storageBucket: "anime-plus-bb54d.appspot.com",
    messagingSenderId: "551268002733",
    appId: "1:551268002733:web:3724a803929027a7e7cf24",
    measurementId: "G-99ET6H7F4G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};
  export default db;
