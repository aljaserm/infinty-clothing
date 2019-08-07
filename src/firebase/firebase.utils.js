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
export const createUserProfileDocument= async (userAuth, additonalData) => {
  if(!userAuth) return;
  const userRef =firestore.doc(`Users/${userAuth.uid}`);
  const snapShot= await userRef.get();
  if(!snapShot.exists){
    const{ displayName, email }= userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
    }
    catch(error)
    {
      console.log(error.message);
    }

    }
    return userRef;
}


  export const auth= firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt : 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

