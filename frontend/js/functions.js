//Login
  function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
  window.location.href = "http://apps.socialdeveloper.org/incidences/#/home";
}
function onLoad() {
      gapi.load('auth2,signin2', function() {
        var auth2 = gapi.auth2.init();
        auth2.then(function() {
          // Current values
          var isSignedIn = auth2.isSignedIn.get();
          var currentUser = auth2.currentUser.get();

          if (!isSignedIn) {
            // Rendering g-signin2 button.
            gapi.signin2.render('google-signin-button', {
              'onsuccess': 'onSignIn'  
            });
          } else{
          	window.location.href = "http://apps.socialdeveloper.org/incidences/#/home";
          }
        });
      });
    }
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }