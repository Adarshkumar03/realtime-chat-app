// src/firebase.js
import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase} from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAA9Rki_gQQlyLvqeBAKZtmp1oA7I9MNw0",
    authDomain: "realtime-chat-app-af57d.firebaseapp.com",
    databaseURL: "https://realtime-chat-app-af57d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "realtime-chat-app-af57d",
    storageBucket: "realtime-chat-app-af57d.appspot.com",
    messagingSenderId: "663095516918",
    appId: "1:663095516918:web:3ce35e0c81e2d0b3b496d7",
    measurementId: "G-633TM3TQN3"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);