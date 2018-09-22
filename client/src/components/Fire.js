import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDr2NMFMWS8qwiRhL_y8cJJ5YLpkcnTC3s",
  authDomain: "segundapata-f03d7.firebaseapp.com",
  databaseURL: "https://segundapata-f03d7.firebaseio.com",
  projectId: "segundapata-f03d7",
  storageBucket: "segundapata-f03d7.appspot.com",
  messagingSenderId: "234645745531"
};

const fire = firebase.initializeApp(config);
export default fire;
