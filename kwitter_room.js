
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDDp8ehPn4bWWGBMtgbjjZIVzGzeP73ewY",
  authDomain: "kwitter-application-64f91.firebaseapp.com",
  databaseURL: "https://kwitter-application-64f91-default-rtdb.firebaseio.com",
  projectId: "kwitter-application-64f91",
  storageBucket: "kwitter-application-64f91.appspot.com",
  messagingSenderId: "96873235412",
  appId: "1:96873235412:web:4e15754fc63aca81a1cc41"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
function add_room(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding_room_name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}


function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_name = childKey;
      //Start code
      console.log("Room Name - " + Room_name);
      row = "<div class = 'room_name' id="+Room_name+" onclick = 'redirect_to_roomname(this.id)'>" +Room_name+"<divs/> <hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirect_to_roomname(Name) {
console.log(Name);
localStorage.setItem("room_name", Name);
window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "index.html";
}
