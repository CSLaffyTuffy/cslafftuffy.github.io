
firebase.auth().onAuthStateChanged(function(user)
{

 	 if(user)//if user signed in
  	{

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    
    window.alert("logged in as "+user.email);

	}
 	
  else
  	{
  // window.alert("user?: " + user);
    window.alert("logged out");
    
    
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

function signup()
{

var userEmail = document.getElementById("email_field").value;
var userPass = document.getElementById("password_field").value;

window.alert(userEmail);

firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error)
  {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  



  window.alert("Error :" + errorMessage);
  });

}






function login()
{

window.alert("Logging in...");
var userEmail = document.getElementById("elog").value;
var userPass = document.getElementById("plog").value;



	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error)
	{
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;




  window.alert("Error :" + errorMessage);
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

/*
  ============================================================================
                                  postContainer                              
  ============================================================================  
*/











function newPost() {
  
  let postTitle = document.querySelector('input.title').value;
  let postText  = document.querySelector('textarea.createText').value;

  // let addLocation = document.querySelector('div.postContainer');
  // let addLocation = document.querySelector('div.forumTitle');
  

  let addLocation = document.querySelector('div.postContainer');



  // submitPost();

  // let newPostContent = '<div class="post">  <h1 class="postTitle">' + postTitle + '</h1> <div class="postContent"> <pre>' + postText + '</pre> </div> </div>';

  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");
  console.log("newPost run");


  let newPostContent = '<div class="post">' + 
                          '<div class="postHeader">' + 
                            '<img class="usrLogo"src="./img/logo.png" alt="./img/logo.png" class="userLogo">' + 
                            '<div class="username">Username</div>' + 
                            '<div class="time">postTime</div>' + 
                          '</div>' + 

                          '<h1 class="postTitle">' + postTitle + '</h1>' + 
                          '<img class="postImg" src="./img/logo.png" alt="./img/logo.png" class="userLogo">' + 

                          
                          '<div class="postContent">' + postText + '</div>' + 
                        '</div>';









  console.log(postTitle);
  console.log(postText);
  console.log(newPostContent);
  addLocation.insertAdjacentHTML('afterbegin', newPostContent);
  
  // addLocation.insertAdjacentHTML('afterbegin', "<h1>Testing 1</h1>");
  console.log("1111111111111111111");
  console.log("1111111111111111111");

  // clear form
  document.querySelector('input.title').value="";
  document.querySelector('textarea.createText').value="";
  // Hide popup
  let popupPost = document.getElementById('myId');
  popupPost.style.display = 'none';
  
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
function search() {
  console.log("Search output");
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
