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

     username.localStorage.getItem("user_name");
     document.getElementById("user/name").innerHTML = "Welcome" + user_name + "!"

function addRoom(){
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(user_name).update({
            key : "chatting"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
     
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names + " - room_name") 

       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      }); 
      });
}
getData();
function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}