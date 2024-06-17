
// JavaScript para alternar a classe 'responsive' no menu hamburguer
function toggleMenu() {
    var menu = document.getElementById("myTopmenu");
    if (menu.className === "topmenu") {
        menu.className += " responsive";
    } else {
        menu.className = "topmenu";
    }
}


//Modal Login

var modal = document.getElementById('id01');

var loginLink = document.querySelector('.log-in a');

loginLink.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var closeBtn = document.querySelector('.imgcontainer span');

closeBtn.onclick = function() {
    modal.style.display = "none";
}

var cancelBtn = document.querySelector('.cancelbtn');

cancelBtn.onclick = function() {
    modal.style.display = "none";
}


// passa adiante as imagens da galeria!

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var galleryImages = document.getElementsByClassName("demo");

for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener('click', function() {
        showSlides(slideIndex = i + 1);
    });
}



