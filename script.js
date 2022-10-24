let slideIndex = 1;

function slide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

window.onload = function() {
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByTagName("img");
    // let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
}