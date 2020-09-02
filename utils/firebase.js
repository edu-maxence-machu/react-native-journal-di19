// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDo54N5dW37BK8FFYXvBjMbvU6lCiwLFrY",
    authDomain: "react-native-jounal-ril-caen.firebaseapp.com",
    databaseURL: "https://react-native-jounal-ril-caen.firebaseio.com",
    projectId: "react-native-jounal-ril-caen",
    storageBucket: "react-native-jounal-ril-caen.appspot.com",
    messagingSenderId: "570970188810",
    appId: "1:570970188810:web:4177d432ba5f584e4b03f3"
};
 
// In /utils/firebase.js
// We should import firebase from this module instead of the default package.
import * as firebase from 'firebase'  // Should not be used elsewhere in the project
import "firebase/firestore";
 
firebase.initializeApp(firebaseConfig)
export default firebase;