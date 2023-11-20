
//ADICIONE SEUS LINKS DO FIREBASE

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo(a), " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
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
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Nome da sala: " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter_room.html";
}
