let googleUser;

window.onload = (event) => {
    // Use this to retain user state between html pages.
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('Logged in as: ' + user.displayName);
        googleUser = user;
      } else {
        // If not logged in, navigate back to login page.
        window.location = 'index.html'; 
      };
    });
  };