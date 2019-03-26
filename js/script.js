

/*
  ============================================================================
                                  Login index                              
  ============================================================================  
*/
function loginIndex() {

  var idLoginVar = document.getElementById('idLogin');
  // idLoginVar.style.display = "block";
  if(window.getComputedStyle(idLoginVar).display === "none") {
    idLoginVar.style.display = "block";
    console.log("loginIndex");

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
                                  Login popup                              
  ============================================================================  
*/




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
// document.getElementById("output_text").value = "";

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



 /*
  ============================================================================
                                  Sidebar                              
  ============================================================================  
*/


function sideCreatePost() {

  var idArticle1Var = document.getElementById('myId');
  // idArticle1Var.style.display = "block";
  if(window.getComputedStyle(idArticle1Var).display === "none") {
    idArticle1Var.style.display = "block";
    console.log("sideCreatePost");

  }

  if(window.getComputedStyle(idArticle1Var).display === "block") {
    window.onclick = function(event) {
      if (event.target == idArticle1Var) {
          idArticle1Var.style.display = "none";
      }
    }
  }
  
}

// ===================
// Article 2
// ===================

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
