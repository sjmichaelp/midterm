var vbg1 = document.getElementById("bg1");
var vbg2 = document.getElementById("bg2");
var vbg3 = document.getElementById("bg3");
var vbg4 = document.getElementById("bg4");
var vmain = document.getElementById("main");
var categoryTitle = document.getElementById("categoryTitle");

var gear1 = document.getElementById("gear1");
var gear2 = document.getElementById("gear2");
var gear3 = document.getElementById("gear3");



vbg1.addEventListener("click", function(){
    vmain.style.display = "block";
    categoryTitle.innerHTML = "Head Gears";
    gear1.style.backgroundImage = "url(imgs/gears/h1.png)";
    gear2.style.backgroundImage = "url(imgs/gears/h2.png)";
    gear3.style.backgroundImage = "url(imgs/gears/h3.png)";
});

vbg2.addEventListener("click", function(){
    vmain.style.display = "block";
    categoryTitle.innerHTML = "Body Gears";
    gear1.style.backgroundImage = "url(imgs/gears/b1.png)";
    gear2.style.backgroundImage = "url(imgs/gears/b2.png)";
    gear3.style.backgroundImage = "url(imgs/gears/b3.png)";
});

vbg3.addEventListener("click", function(){
    vmain.style.display = "block";
    categoryTitle.innerHTML = "Leg Gears";
    gear1.style.backgroundImage = "url(imgs/gears/l1.png)";
    gear2.style.backgroundImage = "url(imgs/gears/l2.png)";
    gear3.style.backgroundImage = "url(imgs/gears/l3.png)";
});

vbg4.addEventListener("click", function(){
    vmain.style.display = "block";
    categoryTitle.innerHTML = "Foot Gears";
    
    gear1.style.backgroundImage = "url(imgs/gears/f1.png)";
    gear2.style.backgroundImage = "url(imgs/gears/f2.png)";
    gear3.style.backgroundImage = "url(imgs/gears/f3.png)";
});
