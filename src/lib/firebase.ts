import fb from 'firebase/app';
import 'firebase/firestore'
import 'firebase/database'
import { firebaseConfig } from 'config'

export { fb }
export const firebase = fb.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const database = firebase.database()