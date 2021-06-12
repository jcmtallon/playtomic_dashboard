import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD768vyj4LFpzjVh9Jpm1K3QDkccHJKR6I",
  authDomain: "fir-auth-test-e7726.firebaseapp.com",
  projectId: "fir-auth-test-e7726",
  storageBucket: "fir-auth-test-e7726.appspot.com",
  messagingSenderId: "150793223756",
  appId: "1:150793223756:web:296c9b28bdbc3bdcb4bee9",
});

export default app;
