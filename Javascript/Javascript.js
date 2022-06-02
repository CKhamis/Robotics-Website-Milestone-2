//Universal Variable Information
function SetupText(){
    document.getElementById("Version").innerHTML = "Website Version Series: 2796 - Milestone 2";//NEW CALCULATIONS! Add all the version numbers from all html and css pages and do not divide by 10 -- actually u should a message from costi
}
//Account Sign-in Framework
var LogInToggle = true;
if(LogInToggle == true){
  document.getElementById("LogIn").innerHTML="Dashboard";
  document.getElementById("LogIn").href="Dashboard.html";
  document.getElementById("YG").style.display="block";
  document.getElementById("FB").style.display="block";
  document.getElementById("YGA").href="https://groups.yahoo.com/neo/groups/apesofwrath/info;_ylc=X3oDMTJmaGwxZ3ZyBF9TAzk3MzU5NzE0BGdycElkAzEyNjQ2MjI2BGdycHNwSWQDMTcwNTEzNzA3OARzZWMDdnRsBHNsawN2Z2hwBHN0aW1lAzE0NzQzOTM4NzI-";
  document.getElementById("FBA").href="https://www.facebook.com/apesofwrath668";
}
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



//Easter Eggs
function EasterEgg1(){
  document.getElementById("ErrorImage").style.display = "none";
  document.getElementById("EasterEgg1").style.display = "block";
}
//MobileNav
function ToggleMenu() {
    var x = document.getElementById('MobileNavMenu');
    if (x.style.display === 'block') {
      x.style.display = "none";
      document.getElementById("MobileNav").style.position = "relative";
      document.getElementById("LogInNavBtn").innerHTML = "Log In";
    } else {
        x.style.display = 'block';
        document.getElementById("MobileNav").style.position = "fixed";
        document.getElementById("LogInNavBtn").innerHTML = "Dashboard";
    }
}
//Transitions.......*ooooh* (in D3)
d3.selectAll('.slideshow-container')
  .style("padding-top", "70px")
  .transition()
  .style("padding-top", "0px")
  .duration(700);
  
d3.selectAll('.QuickLinks')
  .style("padding-top", "70px")
  .transition()
  .style("padding-top", "0px")
  .delay(200)
  .duration(700);
  
d3.selectAll('#Categories')
  .style("padding-top", "100px")
  .transition()
  .style("padding-top", "0px")
  .duration(970)
  .delay(400);
  
d3.selectAll('.SubBanners')
  .style("padding-top", "100px")
  .transition()
  .style("padding-top", "0px")
  .duration(1000)
  .delay(600);
  