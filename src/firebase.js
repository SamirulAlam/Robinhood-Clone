import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAjRtlwk4trQ-7rsqbujGC_e1Kzn4WjBZk",
    authDomain: "robinhood-clone-25e51.firebaseapp.com",
    projectId: "robinhood-clone-25e51",
    storageBucket: "robinhood-clone-25e51.appspot.com",
    messagingSenderId: "38460203106",
    appId: "1:38460203106:web:f93aa5708c7182c8f6b13b",
    measurementId: "G-BNJYZLLJB3"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export {db};