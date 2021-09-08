import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDnoLQZrwkSgAdVQ8C65-Unb2tdu0yhKHg',
	authDomain: 'crwn-db-ca9f9.firebaseapp.com',
	projectId: 'crwn-db-ca9f9',
	storageBucket: 'crwn-db-ca9f9.appspot.com',
	messagingSenderId: '749947126977',
	appId: '1:749947126977:web:8e56cec1021d0b0610c040',
	measurementId: 'G-7HR43LC0ML',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log(`Error creating user: ${error.message}`);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = getAuth();
export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

/*
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDnoLQZrwkSgAdVQ8C65-Unb2tdu0yhKHg',
	authDomain: 'crwn-db-ca9f9.firebaseapp.com',
	projectId: 'crwn-db-ca9f9',
	storageBucket: 'crwn-db-ca9f9.appspot.com',
	messagingSenderId: '749947126977',
	appId: '1:749947126977:web:8e56cec1021d0b0610c040',
	measurementId: 'G-7HR43LC0ML',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}
	console.log(firestore.doc('users/123lsjlkds'));
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
*/
