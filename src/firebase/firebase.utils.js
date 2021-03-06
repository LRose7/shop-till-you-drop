import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDLci9icsW8h8pmUDI0izBVP_LTTTCeKg4",
    authDomain: "shop-till-you-drop-aa31f.firebaseapp.com",
    projectId: "shop-till-you-drop-aa31f",
    storageBucket: "shop-till-you-drop-aa31f.appspot.com",
    messagingSenderId: "516760216556",
    appId: "1:516760216556:web:473c85a76b3cf2383b16c9",
    measurementId: "G-MWJQ0VQWWQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;