//The function below retrieves the "currently signed-in user". This will monitor when the user logs in and when the user logs out.
firebase.auth().onAuthStateChanged(function(user) {
  //If the user is signed in.
    if (user) {
    //The below DOM manipulation ensures the logged in state is visible.
    document.getElementById("logged-in").style.display = "block";
    //The below DOM manipulation hides login-form as user has successfully logged in.
    document.getElementById("login-form").style.display = "none";
      
    //Create variable 'user' and assign the current user to this.
    var user = firebase.auth().currentUser;
    //The below if statment checks whether the user is still logged in, the value of 'user' should not be equal to null.
    if(user != null){
        //Retrieve the email that the user is currently signed in with and store this in the new variable 'email_id'.
        var email_id = user.email;
        //When the user is logged in, they will see this message which displays their email address.
        document.getElementById("username").innerHTML = "Welcome User: " + email_id;
    }
//Otherwise if the user is not signed in. 
  } else {
    //The below DOM manipulation hides the logged in state as the login was unsuccessful, therefore they need to try to sign in again hence the login form is still needed.
    document.getElementById("logged-in").style.display = "none";
    //The below DOM manipulation ensures the login-form is still displayed so that the user can try to login again.
    document.getElementById("login-form").style.display = "block";
  }
});

//The below function is activated when the 'login' button HTML element is activated. When clicked, this function is used to check whether the user's login details are valid, thus checks the Firebase database.
function login(){
    //The email address and password entered by the user are stored in their own variables.
    var emailEntered = document.getElementById("emailField").value;
    var passwordEntered = document.getElementById("passwordField").value;
    
    //The below Firebase function uses the above two variables as arguments and checks whether the email address and password entered exist in the Firebase database (estblishes a connection to Firebase).
    firebase.auth().signInWithEmailAndPassword(emailEntered, passwordEntered).catch(function(error) {
        //If there are errors, such as the email address entered is badly-formatted, password is incorrect or the account (email address and password) cannot be found, the below error messsages are displayed using window.alert, to alert the user that their login details are incorrect prompting them to try again. (Validation checks).
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error : " + errorMessage);
    });
 
}

//The below function is activated when the 'logout' button HTML element is activated. When clicked, this function will use a Firebase function to log the user out. When this happens the user will be redirected to the login screen.
function logout(){
    firebase.auth().signOut();
}