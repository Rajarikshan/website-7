
// navbar js

function toggleMenu() {
   var menu = document.getElementById('navbar-links');
   var icon=document.getElementById("menu-icon");
   if (menu.style.display === 'flex') {
       menu.style.display = 'none';
       icon.classList.remove('fa-xmark');
       icon.classList.add('fa-bars');
   } else {
       menu.style.display = 'flex';
       icon.classList.remove('fa-bars');
       icon.classList.add('fa-xmark')
   }
}

//about page rocket-1-function




function rocket1(){
   document.getElementById("rocket1").style="transform:translateX(400%)";
   document.getElementById("rocket-bg11").style="transform:translateX(360%)";



setTimeout(()=>{
   document.getElementById("mydiv-11").style.background="white";

},1700)

   setTimeout (()=>{
    window.location.href="enroll.html"
},5000)
}




// about page rocket-function-2

function rocket2(){
   document.getElementById("rocket2").style="transform:translateX(400%)";
   document.getElementById("rocket-bg22").style="transform:translateX(250%)";


   setTimeout(()=>{
   document.getElementById("mydiv-22").style.background="white";
     
   },1500)
   
      setTimeout (()=>{
       window.location.href="enroll.html"
   },5000)
}


// about page3 rocket-3


function rocket3(){
   document.getElementById("rocket3").style="transform:translateX(400%)";
   document.getElementById("rocket-bg33").style="transform:translateX(350%)";


   setTimeout(()=>{
   document.getElementById("mydiv-33").style.background="white";
     
   },1500)
   
      setTimeout (()=>{
       window.location.href="enroll.html"
   },5000)
}

// mobile screen end


document.querySelectorAll('.leftcard22').forEach(card => {
   card.addEventListener('click', function() {
     const imageSrc = this.getAttribute('data-image');
     const displayImage = document.getElementById('displayImage');
     
     displayImage.src = imageSrc; 
   //   displayImage.style.display = 'block'; 
});
 });






