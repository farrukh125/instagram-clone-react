import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyCL5KQRM3D-urV0dlFML1eAZMKgbT5yV2A",
  authDomain: "instagram-clone-react-2013c.firebaseapp.com",
  projectId: "instagram-clone-react-2013c",
  storageBucket: "instagram-clone-react-2013c.appspot.com",
  messagingSenderId: "619407657143",
  appId: "1:619407657143:web:2b55881ab3ff98f351e532",
  measurementId: "G-CDDBJ57DQ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
