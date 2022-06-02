import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvA05t3Gt_ae3QfbqoK1eTR-701C02-mI",
  authDomain: "tienda-web-basualdoa-arcati.firebaseapp.com",
  projectId: "tienda-web-basualdoa-arcati",
  storageBucket: "tienda-web-basualdoa-arcati.appspot.com",
  messagingSenderId: "243715677796",
  appId: "1:243715677796:web:a73ede66e1071f51bbc971",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
