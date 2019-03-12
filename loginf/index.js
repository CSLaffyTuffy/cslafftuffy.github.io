// //Handles the signup button
// function signup(){

// var userEmail = document.getElementById("email_field").value;
// var userPass = document.getElementById("password_field").value;
// if (userEmail.length < 4)
// {
//   alert('Please enter an email address');
//   return;
// }
// if (userPass.length < 4) {
//   alert('Please enter a password');
//   return;
// }
// firebase.auth().createUserWithEmailAndPassword(userEmail, userPass);


// }
// // Sign in with email and pass

// firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;

//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);

//   //window.alert(errorMessage);
// });
