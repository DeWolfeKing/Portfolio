import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATdPztgFQwrMhstPM9IOSlzE82AiLl0Ro",
    authDomain: "portfolio-77623.firebaseapp.com",
    projectId: "portfolio-77623",
    storageBucket: "portfolio-77623.appspot.com",
    messagingSenderId: "484576303425",
    appId: "1:484576303425:web:179c8f265cef1db76de9c0"
};
const appConfig = initializeApp(firebaseConfig);

export const todoDb = getFirestore()
