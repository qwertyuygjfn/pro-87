import firebase from 'firebase';

// add SDK Firebase

const firebaseConfig = {
    apiKey: "AIzaSyA-5_pVXOiZszpXnyYS0BfGH88oEmlVwUA",
    authDomain: "pro-67-189a1.firebaseapp.com",
    projectId: "pro-67-189a1",
    storageBucket: "pro-67-189a1.appspot.com",
    messagingSenderId: "244737558488",
    appId: "1:244737558488:web:b765c6bc356da42f0054ad"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();