import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

/* Configuration Object Copied From Firebase Console */
const config = {
    apiKey: "AIzaSyAWtE6-A2ln6LgZ7yfDJLc7rhqm4dF6lso",
    authDomain: "dw-fazhionz.firebaseapp.com",
    projectId: "dw-fazhionz",
    storageBucket: "dw-fazhionz.appspot.com",
    messagingSenderId: "267207213899",
    appId: "1:267207213899:web:7d0a4ded9c44d800191ece",
    measurementId: "G-XNLMQXZQWQ"
};



/* Initialize the database */
firebase.initializeApp(config);

/* For Google Database (store) Authentication */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Setup Google Authentication */
const provider = new firebase.auth.GoogleAuthProvider();

/* To always trigger the Google popup */
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


/* Checks to see if a userAuth exists/returns */
 export const createUserProfileDocument = async (userAuth, additionalData) => {
     if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    //Checking to see if the snapshot exists
     if ( !snapShot.exists ) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        //If the snapshot doesn't exist
        //We'll create one using the 'userAuth' object
        try {
            await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData   
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    
    return userRef;
};

export default firebase;