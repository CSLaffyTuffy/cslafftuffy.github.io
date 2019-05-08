
firebase.auth().onAuthStateChanged(function(user)
{

 	 if(user)//if user signed in
  	{

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

    //window.alert("logged in as "+user.email);

	}
 	
  else
  	{
  // window.alert("user?: " + user);
   // window.alert("logged out");
    
    
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
	}

});


/*
  ============================================================================
                                  Login                              
  ============================================================================  
*/

function loginPopup() {
  

  var idLoginVar = document.getElementById('idLogin');
  // idLoginVar.style.display = "block";
  if(window.getComputedStyle(idLoginVar).display === "none") {
    idLoginVar.style.display = "block";
  }

  if(window.getComputedStyle(idLoginVar).display === "block") {
    window.onclick = function(event) {
      if (event.target == idLoginVar) {
          idLoginVar.style.display = "none";
      }
    }
  }
  
}



/*
  ============================================================================
                                  Sign Up                            
  ============================================================================  
*/

function signupPopup()
{
  var idLoginVar = document.getElementById('idSignup');
  // idLoginVar.style.display = "block";
  if(window.getComputedStyle(idLoginVar).display === "none") {
    idLoginVar.style.display = "block";
  }

  if(window.getComputedStyle(idLoginVar).display === "block") {
    window.onclick = function(event) {
      if (event.target == idLoginVar) {
          idLoginVar.style.display = "none";
      }
    }
  }


}

//Handles the signup button
function validatePassword(){
  var password = document.getElementById("password_field")
  , confirm_password = document.getElementById("confirm_password")
  , password_match = document.getElementById("password_match");

  if(password.value != confirm_password.value && confirm_password.value != "") {
    password_match.innerHTML = "Passwords Do Not Match!";
  } else {
    password_match.innerHTML = "";
  }
}

function signup() {
  var email = document.getElementById("email_field").value
  , user = document.getElementById("user_field").value
  , password = document.getElementById("password_field").value
  , confirm_password = document.getElementById("confirm_password").value;

  var db = firebase.firestore();

  if (user == ""){
    password_match.innerHTML = "Enter a Username";
  }
  else if (!(/^[a-zA-Z0-9]+$/).test( user )){
    password_match.innerHTML = "Username is Not AlphaNumeric";
  }
  else{
    var docRef = db.collection("users").doc(user);
    docRef.get().then(function(doc) {
      if (doc.exists) {
        password_match.innerHTML = "Username Already Taken";
      } else {
        if(password != confirm_password) {
          password_match.innerHTML = "Passwords Do Not Match";
        } else {
          firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
            document.getElementById('idSignup').style.display='none'
            db.collection("users").doc(user).set({
              email: email,
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        
            password_match.innerHTML = errorMessage;
          });
        }
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }
}

function login()
{
  var login = document.getElementById("elog").value
    ,userPass = document.getElementById("plog").value
    , llog = document.getElementById("llog");
  
  var db = firebase.firestore();

  var docRef = db.collection("users").doc(login);
  docRef.get().then(function(doc) {
    if (doc.exists) {
        firebase.auth().signInWithEmailAndPassword(doc.data().email, userPass).then(function() {
          document.getElementById('idLogin').style.display='none'
          window.alert("Logged In");
        }).catch(function(error){
            llog.innerHTML = "Invalid Login"
        });
      } else {
        firebase.auth().signInWithEmailAndPassword(login, userPass).then(function() {
          document.getElementById('idLogin').style.display='none'
          window.alert("Logged In");
        }).catch(function(error){
            llog.innerHTML = "Invalid Login"
          });
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
  });
}


function logout()
{
firebase.auth().signOut();

window.alert("Logged out");

}



/*
  ============================================================================
                                  Forum                              
  ============================================================================  
*/


function loadPosts(){
  let db = firebase.firestore();
  let addLocation = document.querySelector('div.postContainer');
  var searchKey = localStorage.getItem("searchKey");
  
  db.collection("posts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      if (searchKey == "" || doc.get("class") == searchKey) {
        addLocation.insertAdjacentHTML('afterbegin', doc.get("post"));
      }
    });
});
}

/*
  ============================================================================
                                  postContainer                              
  ============================================================================  
*/
function newPost() {

  let postTitle = document.querySelector('input.title').value;
  let postText  = document.querySelector('textarea.createText').value;
  let postClass  = document.getElementById("inputClass").value

  let addLocation = document.querySelector('div.postContainer');

  var db = firebase.firestore();
  
  console.log("newPost run");
 

  let today = new Date();
  let date = today.getMonth()+1 + '/' + today.getDate() +'/'+ today.getFullYear();
  let timeS = today.getHours() + ":" + today.getMinutes();

  let newPostContent = '<div class="post">' + 
                          '<div class="postHeader">' + 
                            '<img class="usrLogo"src="./img/logo.png" alt="./img/logo.png" class="userLogo">' + 
                            '<div class="username">Username</div>' + 
							              '<div class="time"> Date: ' + date + ' @ ' + timeS + '</div> ' + 
                            '<div class="classCode"> ' + postClass + '</div>' +
							 
                          '</div>' + 
                          '<h1 class="postTitle">' + postTitle + '</h1>' + 
                          

                          
                          '<div class="postContent">' + postText + '</div>' + 
                        '</div>';


  var currentdate = new Date(); 
  var datetime = String(currentdate.getFullYear())
                + String((currentdate.getMonth()+1)) 
                + String(currentdate.getDate())
                + String(currentdate.getHours())
                + String(currentdate.getMinutes()) 
                + String(currentdate.getSeconds());

  db.collection("posts").doc("userame" + datetime).set({
              post: newPostContent,
              class: postClass,
              stamp: datetime
            })

  console.log(postTitle);
  console.log(postText);
  console.log(newPostContent);
  

  // clear form
  document.querySelector('input.title').value="";
  document.querySelector('textarea.createText').value="";
  // Hide popup
  let popupPost = document.getElementById('myId');
  popupPost.style.display = 'none';
  if (isNaN(postClass)){
    search("test");
  }
  else {
    addLocation.insertAdjacentHTML('afterbegin', newPostContent);
  }
}



let time = {
  date: "date",
  hour: 0,
  minute: 0,
  second: 0
};

function getTime() {
  let today = new Date();
  time.date = today.toDateString();  //"Tue Feb 19 2019"
  time.hour = today.getHours();
  time.minute = today.getMinutes();
  time.second = today.getSeconds();
}

let message = {
  message_time: time,
  message_content: "message_content"
};


function search(searchKey = document.getElementById("searchBar").value) {
  localStorage.setItem("searchKey", searchKey);
  document.location.reload();
}

let history = "";
document.getElementById("output_text").value = "";


function submitPost() {
  getTime();
  // document.getElementsByClassName("input_text").value = "Text Here";
  // message.message_content = document.getElementsByClassName("input_text").value;
  message.message_content = document.getElementById("input_text").value;
  let outputPostMessage = time.date +" " + time.hour +":" + time.minute+ ":" + time.second + "\n" + message.message_content;
  history += outputMessage + "\n\n";
  document.getElementById("output_text").value = history;

  document.getElementById("input_text").value = "";

}


function submitText() {
  console.log("Testing");
  getTime();
  // document.getElementsByClassName("input_text").value = "Text Here";
  // message.message_content = document.getElementsByClassName("input_text").value;
  message.message_content = document.getElementById("input_text").value;
  let outputMessage = time.date +" " + time.hour +":" + time.minute+ ":" + time.second + "\n" + message.message_content;
  history += outputMessage + "\n\n";
  document.getElementById("output_text").value = history;

  document.getElementById("input_text").value = "";

}

function clearHistory() {
  document.getElementById("output_text").value = "";
  history = "";
}

// start
function newArticle(){
  
}

// Image handles
   function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

  previewFile();  //calls the function named previewFile()
