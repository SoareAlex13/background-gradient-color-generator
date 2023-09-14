var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

function changeGradientByInput(){
    body.style.background = "linear-gradient(to right," + color1.value+ "," + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function randomColor() {
    color1.value = rgb(Math.random*255,Math.random*255,Math.random*255);
    color2.value = rgb(Math.random*255,Math.random*255,Math.random*255);
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
}

color1.addEventListener("input", changeGradientByInput);
color2.addEventListener("input", changeGradientByInput);
randomButton,addEventListener("click", randomColor);