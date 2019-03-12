

/*
  ============================================================================
                                  Login                              
  ============================================================================  
*/


/*
$(".openLogin").click(function(){
  $(".modal").addClass("visible");
});

$(".js-close-modal").click(function(){
  $(".modal").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal,.openLogin").length) {
    $("body").find(".modal").removeClass("visible");
  }
});

*/
/*
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/

// Get the modal
// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }



// var login_onclick = false;
function login() {
  modal.style.display='block';
  // document.getElementById('id01').style.width='auto';
  // login_onclick = true;
}

// window.onclick = function() {
//   if (login_onclick == true) {
//     document.getElementById('id01').style.display='none';
//     login_onclick = false;
//   }
  

// }

// var box = document.querySelector(".box");

// // Detect all clicks on the document
// document.addEventListener("click", function(event) {
// 	// If user clicks inside the element, do nothing
// 	if (event.target.closest(".box")) return;

// 	// If user clicks outside the element, hide it!
// 	box.classList.add("js-is-hidden");
// });



/*
  ============================================================================
                                  Forum                              
  ============================================================================  
*/





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
