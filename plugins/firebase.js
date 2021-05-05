import firebase from "firebase";
import "firebase/auth";

let app = null
if (!firebase.app.length) {
    app = firebase.initializeApp(firebaseConfig)
}

export default firebase