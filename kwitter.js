// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBamFoXv5faKfQOB--teBG_ykVRmySB9cU",
  authDomain: "kwitter-1de2d.firebaseapp.com",
  databaseURL: "https://kwitter-1de2d-default-rtdb.firebaseio.com",
  projectId: "kwitter-1de2d",
  storageBucket: "kwitter-1de2d.appspot.com",
  messagingSenderId: "1077931073803",
  appId: "1:1077931073803:web:1d164345c1b3b1e9c3420e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {

  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose:"adicionando user"
})
  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

