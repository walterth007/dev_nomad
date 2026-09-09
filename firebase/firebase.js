import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBeyiyefBBC6pkPzKof_INVvEPCLDhuZzk",
  authDomain: "dev-nomad-walter.firebaseapp.com",
  projectId: "dev-nomad-walter",
  storageBucket: "dev-nomad-walter.firebasestorage.app",
  messagingSenderId: "756253387111",
  appId: "1:756253387111:web:ee38eea3e180d3eab427c2",
  measurementId: "G-52YP146STY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);