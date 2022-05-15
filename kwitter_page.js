//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBMY48Mpt3TSIboD-FRIcj1N7pNFvL7_Q8",
    authDomain: "kwitter-88148.firebaseapp.com",
    databaseURL: "https://kwitter-88148-default-rtdb.firebaseio.com",
    projectId: "kwitter-88148",
    storageBucket: "kwitter-88148.appspot.com",
    messagingSenderId: "811461941268",
    appId: "1:811461941268:web:ae3b847bebdccc6dda6f01",
    measurementId: "G-QQHN7VM984"
  };
firebase.initializeApp(firebaseConfig); 
 username = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
