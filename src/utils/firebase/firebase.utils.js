import { useContext } from '../../context/user.context'
import { initializeApp } from 'firebase/app'
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs
} from 'firebase/firestore'
import 'firebase/compat/auth'
import { 
	getAuth,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword 
} from 'firebase/auth'

/* Configuration Object Copied From Firebase Console */
const firebaseConfig = {
	apiKey: 'AIzaSyAWtE6-A2ln6LgZ7yfDJLc7rhqm4dF6lso',
	authDomain: 'dw-fazhionz.firebaseapp.com',
	projectId: 'dw-fazhionz',
	storageBucket: 'dw-fazhionz.appspot.com',
	messagingSenderId: '267207213899',
	appId: '1:267207213899:web:7d0a4ded9c44d800191ece',
	measurementId: 'G-XNLMQXZQWQ',
}

/* Initialize the database */
const firebaseApp = initializeApp(firebaseConfig)

/* Setup Google Authentication */
const provider = new GoogleAuthProvider()

/* To always trigger the Google popup */
provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()

/* For Google Database (store) Authentication */
export const db = getFirestore()


export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

/* Checks to see if a userAuth exists/returns */
export const createUserDocumentFromAuth = async (userAuth, 
additionalInformation = {}) => {
	if (!userAuth) return
	const userDocRef = doc(db, 'users', userAuth.uid)
	const userSnapshot = await getDoc(userDocRef)


	//Checking to see if the snapshot exists
	if (!userSnapshot.exists()) {
		const { email, displayName } = userAuth
		const createdAt = new Date()
		

		//If the snapshot doesn't exist
		//We'll create one using the 'userAuth' object
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation
			})

		} catch (error) {
			console.log('Error creating the user', error.message)
		}
	}

	return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return

	return createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return
	
	await signInWithEmailAndPassword(auth, email, password)
}

// Add data to the database
export const addCategoriesAndDocuments = async (
	collectionKey,
	objectsToAdd) => {
	const collectionRef = collection(db, collectionKey)

	const batch = writeBatch(db)

	objectsToAdd.forEach((obj) => {
		const newDocRef = doc(collectionRef, obj.title.toLowerCase())
		batch.set(newDocRef, obj)
	})

	return await batch.commit()
}

// Retrieve data from the database
export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories')
	const q = query(collectionRef)

	const querySnapshot = await getDocs(q)
	const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
		const { title, items } = docSnapshot.data()
		acc[title.toLowerCase()] = items
		return acc
	}, {})

	return categoryMap
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data()

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		}
	})

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection
		return accumulator
	}, {})
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
	onAuthStateChanged(auth, callback)

