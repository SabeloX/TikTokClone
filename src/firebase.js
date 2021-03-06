import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCQIGgBDwB7KP-UeCse7UyG8E-3zZWQo28",
    authDomain: "tik-tok-f6910.firebaseapp.com",
    databaseURL: "https://tik-tok-f6910.firebaseio.com",
    projectId: "tik-tok-f6910",
    storageBucket: "tik-tok-f6910.appspot.com",
    messagingSenderId: "693203805617",
    appId: "1:693203805617:web:fe19b0bfd08e5a0ad54990",
    measurementId: "G-868S0Z8PRD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const database = firebaseApp.firestore()
export const auth = firebase.auth()

export default firebase