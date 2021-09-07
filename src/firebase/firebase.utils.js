/*
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
	apiKey: 'AIzaSyDnoLQZrwkSgAdVQ8C65-Unb2tdu0yhKHg',
	authDomain: 'crwn-db-ca9f9.firebaseapp.com',
	projectId: 'crwn-db-ca9f9',
	storageBucket: 'crwn-db-ca9f9.appspot.com',
	messagingSenderId: '749947126977',
	appId: '1:749947126977:web:8e56cec1021d0b0610c040',
	measurementId: 'G-7HR43LC0ML',
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'Select_Account' });

export const signInWithGoogle = () => {
	return auth.signInWithPopup(provider);
};
*/

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
