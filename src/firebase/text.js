import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
	.collection('users')
	.doc('LGoaUqgmlniKcWpCpaYJ')
	.collection('cardItems')
	.doc('cuyT1lkHFNGNQk9fwqK7');
