import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD8gj7Xi-4IL45Ik1aut6o-ucmrfHc-etE',
  authDomain: 'transkor-processing.firebaseapp.com',
  projectId: 'transkor-processing',
  storageBucket: 'transkor-processing.appspot.com',
  messagingSenderId: '31677574497',
  appId: '1:31677574497:web:45eb02d04c611b9c602920',
  measurementId: 'G-F9ZNTNQF3R'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {
  auth,
  db
}
