import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiljzhkEFX-Knuie9vHTWtqXv9aZFoWyM",
    authDomain: "crown-db-ecfa7.firebaseapp.com",
    projectId: "crown-db-ecfa7",
    storageBucket: "crown-db-ecfa7.appspot.com",
    messagingSenderId: "771200890999",
    appId: "1:771200890999:web:02c09085e7971739ed6e72",
    measurementId: "G-KDNH6ZX23N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;