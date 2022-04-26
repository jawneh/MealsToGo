import { initializeApp } from "firebase/app"
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth"
const firebase_config = {
  apiKey: "AIzaSyCvTlqQsI1Teyj7wygI9aS0Y837XPnSlnk",
  authDomain: "measltogo.firebaseapp.com",
  projectId: "measltogo",
  storageBucket: "measltogo.appspot.com",
  messagingSenderId: "861877017252",
  appId: "1:861877017252:web:9f4cd3454b411b0989a431",
}

const app = initializeApp(firebase_config)
const auth = getAuth(app)

export const logInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    return error.message
  }
}

export const authStateChanged = () => {
  try {
    auth.onAuthStateChanged(user => {
      if (user) {
        return { email: user.email, uid: user.uid }
      }
    })
  } catch (e) {
    console.log(e, "state change error")
    return false
  }
}

export const signOutUser = () => {
  return signOut(auth)
}
// export { logInWithEmailAndPassword, registerWithEmailAndPassword }
