import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDVhy67Ok5uCQyyWwzQY8oyIS5KnZ7hpfU",
  authDomain: "react-redux-todo-5ee8a.firebaseapp.com",
  databaseURL: "https://react-redux-todo-5ee8a.firebaseio.com",
  projectId: "react-redux-todo-5ee8a",
  storageBucket: "react-redux-todo-5ee8a.appspot.com",
  messagingSenderId: "753825693711",
}

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();

export const todosRef = databaseRef.child("todos")