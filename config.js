import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyC2KIeED9U8OAGvp2wyvVJbYFq10wZeXgM",
    authDomain: "project-p67.firebaseapp.com",
    projectId: "project-p67",
    storageBucket: "project-p67.appspot.com",
    messagingSenderId: "407958323221",
    appId: "1:407958323221:web:30734d9af0f128aeef0e1c"
};

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();