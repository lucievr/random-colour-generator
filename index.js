//jshint esversion:6

document.querySelectorAll(".color-box")[0].addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = (Math.random()).toFixed(2);
    let rgbaColor = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    
    document.querySelectorAll(".color-box")[0].style.backgroundColor  = rgbaColor;
    document.querySelectorAll(".color-code")[0].innerHTML = rgbaColor;
    document.querySelectorAll(".color-code")[0].style.color = rgbaColor;
});


function blink() {
    let clickAbove = document.querySelectorAll(".click")[0];
    setInterval(function() {
       clickAbove.style.display = (clickAbove.style.display == "none" ? "" : "none");
    }, 1000);
 }

blink ();