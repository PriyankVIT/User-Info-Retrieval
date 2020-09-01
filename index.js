
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
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    });
}