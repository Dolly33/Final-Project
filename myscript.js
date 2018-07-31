//SCRIPT FOR IMAGE SLIDER
 let i = 0;
   	     let images = [];
   	     var time = 3000;

   	     //Image list
   	     images[0]= 'farmers.jpg';
   	     images[1]= 'hero.jpg';
   	     images[2]= 'farm.jpg';
   	     images[3]= 'farmers4.jpg';
   	     images[4]= 'farmers6.jpg';

   	     //Change image
   	     function changeImg(){
   	     	document.slide.src =images[i];

   	     	if(i < images.length  - 1){
   	     		i++;
   	     	}else{
   	     		i =0;
   	     	}

   	     	setTimeout("changeImg()", time);
   	     }

   	     window.onload = changeImg;


//SCRIPT FOR THE SIGNUP FORM
// Get the modal
let signup = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(){
    signup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    signup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signup) {
        signup.style.display = "none";
    }
}


//SCRIPT FOR THE LOGIN FORM
// Get the modal
let login = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}
