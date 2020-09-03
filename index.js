var firebaseConfig = {
    apiKey: "AIzaSyDCb8hoW5jlQJjoLD69IvLxV-fivgjOMrQ",
    authDomain: "user-info-retrieval-33b05.firebaseapp.com",
    databaseURL: "https://user-info-retrieval-33b05.firebaseio.com",
    projectId: "user-info-retrieval-33b05",
    storageBucket: "user-info-retrieval-33b05.appspot.com",
    messagingSenderId: "318565364442",
    appId: "1:318565364442:web:0d902758d92a8ae67d6be3",
    measurementId: "G-KC84M8T3CZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
gapi.load('auth2', function () {
    var auth2 = gapi.auth2.init();
    auth2.signIn().then(function () {
        console.log(auth2.currentUser.get().getId());
    });
});
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('Full Name: ' + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());
    let name = profile.getName();
    let email = profile.getEmail();
    let photo = profile.getImageUrl();
        var data = {
            Name: name,
            Email: email,
            Photo: photo 
        }
    var database = firebase.database();
    var ref = database.ref("records");
    ref.push(data);

    ref.on("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var data = childSnapshot.val()
            console.log(data);
        })
    })
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    });
}

