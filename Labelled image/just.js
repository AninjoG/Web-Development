var a1 = document.getElementById("flash");
var a2 = document.getElementById("superman");
var a3 = document.getElementById("cybrog");
var a4 = document.getElementById("wonderwomen");
var a5 = document.getElementById("batman");
var a6 = document.getElementById("aquaman");


var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");

a1.addEventListener("mouseover", function() {
  c1.style.display = "block";
});

a2.addEventListener("mouseover", function() {
  c2.style.display = "block";
});

a3.addEventListener("mouseover", function() {
  c3.style.display = "block";
});

a4.addEventListener("mouseover", function() {
  c4.style.display = "block";
});

a5.addEventListener("mouseover", function() {
  c5.style.display = "block";
});

a6.addEventListener("mouseover", function() {
  c6.style.display = "block";
});

a1.addEventListener("mouseout", function() {
  c1.style.display = "none";
});

a2.addEventListener("mouseout", function() {
  c2.style.display = "none";
});

a3.addEventListener("mouseout", function() {
    c3.style.display = "none";
});

a4.addEventListener("mouseout", function() {
  c4.style.display = "none";
});

a5.addEventListener("mouseout", function() {
    c5.style.display = "none";
});

a6.addEventListener("mouseout", function() {
  c6.style.display = "none";
});
  