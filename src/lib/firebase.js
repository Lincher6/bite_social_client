import fb from 'firebase'
import 'firebase/firestore'
import { firebaseConfig } from 'config'

export const firebase = fb.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const database = firebase.database()