var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");
var bgText = document.getElementById("bgText");

img1_count = 1;
img2_count = 1;
img3_count = 1;
img4_count = 1;

bgText.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
             if(bgText.value == "combo2"){
                 document.getElementById("img1").src="imgs/gears/h2.png";
                 document.getElementById("img2").src="imgs/gears/b2.png";
                 document.getElementById("img3").src="imgs/gears/l2.png";
                 document.getElementById("img4").src="imgs/gears/f2.png";
             }
            else if(bgText.value == "combo1"){
                 document.getElementById("img1").src="imgs/gears/h1.png";
                 document.getElementById("img2").src="imgs/gears/b1.png";
                 document.getElementById("img3").src="imgs/gears/l1.png";
                 document.getElementById("img4").src="imgs/gears/f1.png";
             }
            else if(bgText.value == "combo3"){
                 document.getElementById("img1").src="imgs/gears/h3.png";
                 document.getElementById("img2").src="imgs/gears/b3.png";
                 document.getElementById("img3").src="imgs/gears/l3.png";
                 document.getElementById("img4").src="imgs/gears/f3.png";
             }
            else if(bgText.value == "random"){
                random_num1 = Math.floor(Math.random() * 3) + 1;
                random_num2 = Math.floor(Math.random() * 3) + 1;
                random_num3 = Math.floor(Math.random() * 3) + 1;
                random_num4 = Math.floor(Math.random() * 3) + 1;
                
                document.getElementById("img1").src="imgs/gears/h"+random_num1+".png";
                document.getElementById("img2").src="imgs/gears/b"+random_num2+".png";
                document.getElementById("img3").src="imgs/gears/l"+random_num3+".png";
                document.getElementById("img4").src="imgs/gears/f"+random_num4+".png";
            }

    }
});

document.getElementById("Next").addEventListener("click", function(){
     if(c1.checked){
         img1_count++;
         if (img1_count == 4){
             img1_count = 1;
         }
             document.getElementById("img1").src="imgs/gears/h"+img1_count+ ".png";
         }
    
    else if(c2.checked){
         img2_count++;
         if (img2_count == 4){
             img2_count = 1;
         }document.getElementById("img2").src="imgs/gears/b"+img2_count+ ".png";
         }
    else if(c3.checked){
         img3_count++;
         if (img3_count == 4){
             img3_count = 1;
         }document.getElementById("img3").src="imgs/gears/l"+img3_count+ ".png";
         }
    else if(c4.checked){
         img4_count++;
         if (img4_count == 4){
             img4_count = 1;
         }document.getElementById("img4").src="imgs/gears/f"+img4_count+ ".png";
         }
    else {
            alert("choose an option");
        }

});

document.getElementById("Prev").addEventListener("click", function(){
     if(c1.checked){
         img1_count--;
         if(img1_count==0){
             img1_count = 3
         }
             document.getElementById("img1").src="imgs/gears/h"+img1_count+ ".png";
     }
    else if(c2.checked){
         img2_count--;
         if(img2_count==0){
             img2_count = 3
         }document.getElementById("img2").src="imgs/gears/b"+img2_count+ ".png";
    }
    else if(c3.checked){
         img3_count--;
         if(img3_count==0){
             img3_count = 3
         }document.getElementById("img3").src="imgs/gears/l"+img3_count+ ".png";
         
    }
    else if(c4.checked){
         img4_count--;
         if(img4_count==0){
             img4_count = 3
         }document.getElementById("img4").src="imgs/gears/f"+img4_count+ ".png";
         }
    else {
            alert("choose an option");
        }
});