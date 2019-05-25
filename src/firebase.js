import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDEt5fvPnNllnwOdQd7JaWreS5l1pdqjE4',
  authDomain: 'vue-shop-d76d4.firebaseapp.com',
  databaseURL: 'https://vue-shop-d76d4.firebaseio.com',
  projectId: 'vue-shop-d76d4',
  storageBucket: 'vue-shop-d76d4.appspot.com',
  messagingSenderId: '405600291689',
  appId: '1:405600291689:web:1e353fdf3ee70bcd'
}
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export {fb, db}
