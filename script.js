// Importation de Firebase depuis le CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAeh5YQ-XHN9LG1h0rH3g2Ci2LS4byFF40",
  authDomain: "aide-pro-f2a0f.firebaseapp.com",
  projectId: "aide-pro-f2a0f",
  storageBucket: "aide-pro-f2a0f.firebasestorage.app",
  messagingSenderId: "196840068418",
  appId: "1:196840068418:web:ceb1e5bdd366077772a4db"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function openModal(type) {
    document.getElementById(type + "Modal").style.display = "block";
}

function closeModal(type) {
    document.getElementById(type + "Modal").style.display = "none";
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Connecté !");
            closeModal('login');
        })
        .catch((error) => {
            alert("Erreur : " + error.message);
        });
}

function signup() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Compte créé !");
            closeModal('signup');
        })
        .catch((error) => {
            alert("Erreur : " + error.message);
        });
}
