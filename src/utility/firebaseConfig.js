// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpPG9rLb6rBBGm9aXLZfL-AVZzJZwdvuA',
  authDomain: 'shopopedia-c8ad3.firebaseapp.com',
  projectId: 'shopopedia-c8ad3',
  storageBucket: 'shopopedia-c8ad3.firebasestorage.app',
  messagingSenderId: '597221993546',
  appId: '1:597221993546:web:c855ffc1da8fc73f670ab3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { app as firebaseapp, db }
