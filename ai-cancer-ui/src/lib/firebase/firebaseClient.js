// Import the functions you need from the SDKs you need
import { deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, setPersistence, inMemoryPersistence } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRArYuRx4hOIEntpd6sOj7PnwOzMG29A0",
    authDomain: "sdmay24-10.firebaseapp.com",
    projectId: "sdmay24-10",
    storageBucket: "sdmay24-10.appspot.com",
    messagingSenderId: "159889844134",
    appId: "1:159889844134:web:f5f20aa862754ba2b29167",
    measurementId: "G-E2BZSNX333"
};
// Initialize Firebase
let firebaseApp;
if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = getApp()
    deleteApp(firebaseApp)
    firebaseApp = initializeApp(firebaseConfig)
}

export const auth = getAuth(firebaseApp)