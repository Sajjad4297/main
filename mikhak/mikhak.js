var rightArrow=document.getElementById("go-right");
var leftArrow=document.getElementById("go-left");
var counter = 1;
rightArrow.addEventListener("click",function (){
    if (counter<3) {
        counter++;
    }
    else{
        counter=1;
    }
    let move = document.getElementById('right-arrow');
    if (move.classList=="right-arrow-move") {return}
    move.classList.add("right-arrow-move");
    setTimeout(function (){
        move.classList.remove("right-arrow-move");
    }, 300)
});
leftArrow.addEventListener("click",function (){
    if (counter>1) {
        counter--;
    }
    else{
        counter=3;
    }
    let move = document.getElementById('left-arrow');
    if (move.classList=="left-arrow-move") {return}
    move.classList.add("left-arrow-move");
    setTimeout(function (){
        move.classList.remove("left-arrow-move");
    }, 300)
});
setInterval(function (){
    document.getElementById('slider-img').src="images/slider" + counter + ".jpg"
},100);
