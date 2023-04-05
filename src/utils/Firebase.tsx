// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase/app';
import auth from '@react-native-firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAAI9t0_JiI12tao9pn6-0oocdfypPyX4",
  authDomain: "food-recipes-a1622.firebaseapp.com",
  projectId: "food-recipes-a1622",
  storageBucket: "food-recipes-a1622.appspot.com",
  messagingSenderId: "184328546620",
  appId: "1:184328546620:web:c0ce0d3d55abd0daf69639",
  measurementId: "G-0Z8DKNB01W"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const signUp =async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    return userCredential.user
  } catch (error) {
    console.log('Error signing up: ', error);
    throw error
  }
};

const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    // User successfully logged in
    return userCredential.user;
  } catch (error) {
    // Handle log in errors
    console.log('Error logging in: ', error);
    throw error;
  }
};

export const FirebaseManager = {
  signIn,
  signUp
}