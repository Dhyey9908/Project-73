import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyB7-hbLpq1XjKJ9DLBge4nmU-aj-FAOqfo",
  authDomain: "lets-ride-7b39c.firebaseapp.com",
  projectId: "lets-ride-7b39c",
  storageBucket: "lets-ride-7b39c.appspot.com",
  messagingSenderId: "1042552926420",
  appId: "1:1042552926420:web:ee1e1448c91ee04717cb41"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

