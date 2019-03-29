//Autoslider chuyện slider tự động
var slideindex = 0;
var slider = document.getElementsByClassName("slider");
changeslide();
function changeslide(){
    for(var i = 0; i < slider.length; i++){
        slider[i].style.display = "none";
    }
    slideindex++;
    if(slideindex > slider.length){
        slideindex = 1;
    }
    slider[slideindex - 1].style.display = "block";
    setTimeout(changeslide, 3000);
}
var trailer = document.getElementsByClassName("trailer");
for(var i = 0; i < trailer.length; i++){
    var divplay = document.createElement("div");
    divplay.className = "play";
    var iconplay = document.createElement("i");
    iconplay.className = "fas fa-play";
    divplay.appendChild(iconplay);
    trailer[i].appendChild(divplay);
}
//Ticket phần mua vé nhanh
var type = document.getElementsByClassName("type");
var form = document.getElementsByClassName("typeForm");
type[2].onclick = function(){
    for(var i = 0; i < type.length; i++){
        type[i].classList.remove("active");
    }
    type[2].classList.add("active");
    form[2].style.display = "block";
    form[1].style.display = "none";
    form[0].style.display = "none";
}
type[1].onclick = function(){
    for(var i = 0; i < type.length; i++){
        type[i].classList.remove("active");
    }
    type[1].classList.add("active");
    form[1].style.display = "block";
    form[0].style.display = "none";
    form[2].style.display = "none";
}
type[0].onclick = function(){
    for(var i = 0; i < type.length; i++){
        type[i].classList.remove("active");
    }
    type[0].classList.add("active");
    form[0].style.display = "block";
    form[2].style.display = "none";
    form[1].style.display = "none";
}
var hide = document.getElementsByClassName("hide");
var exit = document.getElementsByClassName("exit");
exit[exit.length-1].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
    hide[0].style.display = "none";
}

var play = document.getElementsByClassName("play");
play[0].onclick = function(){
    var popup = document.getElementsByClassName("popup");
    popup[0].style.display = "block";
    hide[0].style.display = "block";
}

window.onclick = function(event){
    if(event.target == hide){
        hide[0].style.display = "none";
    }
}

var type1 = document.getElementsByClassName("type1");
var form1 = document.getElementsByClassName("typeForm1");
type1[1].onclick = function(){
    for(var i = 0; i < type1.length; i++){
        type1[i].classList.remove("active1");
        type1[i].classList.remove("up");

    }
    type1[1].classList.add("active1");
    form1[1].style.display = "block";
    form1[1].classList.add("up");
    form1[0].style.display = "none";

}
type1[0].onclick = function(){
    for(var i = 0; i < type1.length; i++){
        type1[i].classList.remove("active1");
        type1[i].classList.remove("up");
    }
    type1[0].classList.add("active1");
    form1[0].style.display = "block";
    form1[0].classList.add("up");
    form1[1].style.display = "none";
}

