// Tr3sense · recibe las notificaciones cuando la app está cerrada
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyA4lStJX6JiHXNFq2Sl-a-YGZ0P75R3Xd8",
  authDomain: "tresense-app.firebaseapp.com",
  projectId: "tresense-app",
  storageBucket: "tresense-app.firebasestorage.app",
  messagingSenderId: "356703634897",
  appId: "1:356703634897:web:73912929d982455543ccf0"
});
firebase.messaging();
