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
function saveuser(){
    user_name = document.getElementById("userbox").value
    firebase.database().ref("/").child(user_name).update({
        key : "chatting"
    });
}