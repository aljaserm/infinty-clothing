import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDhM6UTThdG2lW4n1Zo1l_nwa0O5PnOMcw",
    authDomain: "infinity-db.firebaseapp.com",
    databaseURL: "https://infinity-db.firebaseio.com",
    projectId: "infinity-db",
    storageBucket: "",
    messagingSenderId: "116728977531",
    appId: "1:116728977531:web:771d9bf9b4fbde00"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt : 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

