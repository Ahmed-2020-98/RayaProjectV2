// import * as firebase from 'firebase'

// import 'firebase/storage';
// import 'firebase/firestore';
// import 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyBHyET96e95uNPlEUZtjtwphMsfwWy0yX8",
//     authDomain: "rayashop-test1-d4f6b.firebaseapp.com",
//     projectId: "rayashop-test1-d4f6b",
//     storageBucket: "rayashop-test1-d4f6b.appspot.com",
//     messagingSenderId: "132857927219",
//     appId: "1:132857927219:web:f069f0c7bcae490495f546"
//   };

// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const db = firebase.firestore();
// const storage = firebase.storage();

// export { auth, db, storage }

// ************************************************************
// import  firebase from "firebase"
// import 'firebase/auth'

// const app= firebase.initialzeApp({
//     apiKey: "AIzaSyBHyET96e95uNPlEUZtjtwphMsfwWy0yX8",
//     authDomain: "rayashop-test1-d4f6b.firebaseapp.com",
//     projectId: "rayashop-test1-d4f6b",
//     storageBucket: "rayashop-test1-d4f6b.appspot.com",
//     messagingSenderId: "132857927219",
//     appId: "1:132857927219:web:f069f0c7bcae490495f546"
//   });

// export const auth = app.auth()
// export default app


// **************************************************************
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHyET96e95uNPlEUZtjtwphMsfwWy0yX8",
    authDomain: "rayashop-test1-d4f6b.firebaseapp.com",
    projectId: "rayashop-test1-d4f6b",
    storageBucket: "rayashop-test1-d4f6b.appspot.com",
    messagingSenderId: "132857927219",
    appId: "1:132857927219:web:f069f0c7bcae490495f546"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };