var firebaseConfig = {
    apiKey: "AIzaSyAblF7_xKb0wX6A9fQSPygKhAxsqJkSHVk",
    authDomain: "tuit-6a139.firebaseapp.com",
    databaseURL: "https://tuit-6a139-default-rtdb.firebaseio.com",
    projectId: "tuit-6a139",
    storageBucket: "tuit-6a139.appspot.com",
    messagingSenderId: "239578385303",
    appId: "1:239578385303:web:f6284690013d6a518c12d2"
  };
  
  // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

user_name =localStorage.getItem("user_name")
room_name =localStorage.getItem("room_name")
document.getElementById("user_name").innerHTML = "hola" + user_name

function add_room() {
room_name =document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
    purpose:"añadiendosala"
})
localStorage.setItem("room_name",room_name)
window.location.replace("tuit.html")
}



function log_out() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
function redireccionando(name) {
   console.log(name);
   localStorage.setItem("room_name",room_name)
    window.location("tuit.html")
}