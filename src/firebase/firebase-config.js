import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyCCga2WO25ZQFfAuqnXx-CBN8j70OqsuN4",
	authDomain: "crown-store-d6992.firebaseapp.com",
	databaseURL: "https://crown-store-d6992.firebaseio.com",
	projectId: "crown-store-d6992",
	storageBucket: "crown-store-d6992.appspot.com",
	messagingSenderId: "1058827440536",
	appId: "1:1058827440536:web:1a4d9991dd29cd4124dbed",
	measurementId: "G-WGZDENHVSX",
};

firebase.initializeApp(config);

export const createUserindatabase = async (userauth, aditionaldata) => {
	if (!userauth) return;

	const userRef = firestore.doc(`users/${userauth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userauth;
		const createdAt = new Date();
		try {
			userRef.set({
				displayName,
				email,
				createdAt,
				...aditionaldata,
			});
		} catch (error) {
			console.log(error);
		}
	}
	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
