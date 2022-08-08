import firebase from "firebase/app"
import 'firebase/auth'

const app= firebase.initialzeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:  process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth()
export default app

// .env.local 
// REACT_APP_FIREBASE_API_KEY=AIzaSyDc1fXp0qK_OCrWo63Osn372dkDAqUOgEk
// REACT_APP_FIREBASE_AUTH_DOMAIN=auth-development-ce0cb.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=auth-development-ce0cb
// REACT_APP_FIREBASE_STORAGE_BUCKET=auth-development-ce0cb.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=108908433870
// REACT_APP_FIREBASE_APP_ID=1:108908433870:web:d722bd15b6fa714da4db9f