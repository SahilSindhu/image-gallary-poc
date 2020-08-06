import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBlpwVLU1hc8RWxErWErAMTIUg7oA5CPz4",
  authDomain: "poc-a-d6839.firebaseapp.com",
  databaseURL: "https://poc-a-d6839.firebaseio.com",
  projectId: "poc-a-d6839",
  storageBucket: "poc-a-d6839.appspot.com",
  messagingSenderId: "714418103124",
  appId: "1:714418103124:web:425e8dadca3eedb093dec1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectStore, timeStamp };
