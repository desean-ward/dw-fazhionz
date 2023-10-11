import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import "firebase/auth";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

/* Configuration Object Copied From Firebase Console */
const firebaseConfig = {
  apiKey: "AIzaSyAWtE6-A2ln6LgZ7yfDJLc7rhqm4dF6lso",
  authDomain: "dw-fazhionz.firebaseapp.com",
  projectId: "dw-fazhionz",
  storageBucket: "dw-fazhionz.appspot.com",
  messagingSenderId: "267207213899",
  appId: "1:267207213899:web:7d0a4ded9c44d800191ece",
  measurementId: "G-XNLMQXZQWQ",
};

/* Initialize the database */
const firebaseApp = initializeApp(firebaseConfig);

/* Setup Google Authentication */
const provider = new GoogleAuthProvider();

/* To always trigger the Google popup */
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

/* For Google Database (store) Authentication */
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/* Checks to see if a userAuth exists/returns */
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //Checking to see if the snapshot exists
  if (!userSnapshot.exists()) {
    const { email, displayName, uid } = userAuth;
    const createdAt = new Date();

    //If the snapshot doesn't exist
    //We'll create one using the 'userAuth' object
    try {
      await setDoc(userDocRef, {
        uid,
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};

/* Custom function to create an authorized user with email/password */
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  /* Actual function for creation within Firebase */
  return await createUserWithEmailAndPassword(auth, email, password);
};

/* Custom function to sign-in an authorized user with email/password */
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  /* Actual function for creation within Firebase */
  await signInWithEmailAndPassword(auth, email, password);

  const userRef = doc(db, "users", auth.currentUser.uid);
  const userSnapshot = await getDoc(userRef);

  try {
    const user = userSnapshot.data();
    return user;
  } catch (err) {
    console.log("Error returning signed in user: " + err);
  }
};

// Add categories to the database
export const addCategoriesAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// Retrieve data from the database
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const descriptionRef = collection(db, "descriptions");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  // const descSnapshot = await getDocs(descriptionRef)

  // Gets back the categories as an array
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

/* Add the product descriptions from OpenAI */
export const addProductDescriptions = async (prodDescs) => {
  if (!prodDescs) return console.log("No descriptions to add!");

  let collectionRef = collection(db, "descriptions");
  let collectionSnapshot = await getDocs(collectionRef);
  console.log(
    "ATTEMPTING TO ADD DESCRIPTIONS" + JSON.stringify(prodDescs.length)
  );

  if (!collectionSnapshot.empty) {
    try {
      prodDescs.forEach(async (description) => {
        console.log("ADDING... " + JSON.stringify(description));
        await addDoc(collectionRef, { description });
      });

      return console.log("Descriptions Created!");
    } catch (err) {
      console.log("Error creating descriptions: " + err);
    }
  } else console.log("Descriptions already exist!");
};

// Retrieve product descriptions from the database
export const getProductDescriptions = async () => {
  const descriptionRef = collection(db, "descriptions");
  const q = query(descriptionRef);
  const descriptions = [];

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    descriptions.push(doc.data());
  });

  return descriptions;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

/* Get the cart items for logged in Google User */
export const getCartItems = async (user) => {
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userRef);

    try {
      if (userSnapshot.exists()) {
        const cartItems = userSnapshot.data().cartItems;
        if (cartItems !== null || cartItems !== "undefined") {
          console.log(
            "CART ITEM RETRIEVAL SUCCESSFUL!" + JSON.stringify(cartItems)
          );
          return cartItems;
        } else {
          console.log("CART ITEMS IS: " + JSON.stringify(cartItems));
        }
      } else {
        console.log("CURRENT SNAPSHOT DOES NOT EXIST");
      }
    } catch (err) {
      console.log(
        "An error was encountered when fetching the cart items: " + err
      );
    }
  }
};

/* Update cart in database */
export const updateCartInDB = async (currentUser, items) => {
  console.log("WITHIN FIREBASE, CURRENT USER: " + JSON.stringify(currentUser));
  if (currentUser) {
    const userRef = doc(db, "users", currentUser.uid);
    const userSnapshot = await getDoc(userRef);

    try {
      if (userSnapshot.exists()) {
        const cartItems = userSnapshot.data();

        if (cartItems !== null || cartItems !== "undefined") {
          await updateDoc(userRef, { cartItems: items });
        }
      } else {
        console.log("CART UPDATE ERROR!");
        await setDoc(userRef, { cartItems: items });
      }
    } catch (err) {
      alert("UPDATE ERROR: " + err);
    }
  }
};

export const getCurrentUser = async (id) => {
  if (id) {
    try {
      const userRef = doc(db, "users", id);
      const userSnapshot = await getDoc(userRef);
      return userSnapshot.data();
    } catch (error) {
      console.log("Error getting the current user", error.message);
    }
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
