import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'


const config = {
    apiKey: "AIzaSyAEwPdt5FopX-dSp6hZg0srfiqAHqP8OBs",
    authDomain: "projetofinal-49241.firebaseapp.com",
    projectId: "projetofinal-49241",
    storageBucket: "projetofinal-49241.appspot.com",
    messagingSenderId: "172633458896",
    appId: "1:172633458896:web:1cd64a561ad41c458c76d5",
    measurementId: "G-ZJLLRRKJ32"

};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

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

        }
    }

    return userRef;

} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;