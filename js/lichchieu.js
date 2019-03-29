var type1 = document.getElementsByClassName("type1");
var form1 = document.getElementsByClassName("typeForm1");
type1[1].onclick = function(){
    for(var i = 0; i < type1.length; i++){
        type1[i].classList.remove("active1");
        type1[i].classList.remove("up");

    }
    type1[1].classList.add("active1");
    form1[1].style.display = "flex";
    form1[1].classList.add("up");
    form1[0].style.display = "none";

}
type1[0].onclick = function(){
    for(var i = 0; i < type1.length; i++){
        type1[i].classList.remove("active1");
        type1[i].classList.remove("up");
    }
    type1[0].classList.add("active1");
    form1[0].style.display = "flex";
    form1[0].classList.add("up");
    form1[1].style.display = "none";
}

var p = document.getElementsByClassName("p");
var r = document.getElementsByClassName("r");
var s = document.getElementsByClassName("s");
var p1 = document.getElementsByClassName("p1");
var r1 = document.getElementsByClassName("r1");
var s1 = document.getElementsByClassName("s1");

p[0].onclick = function(){
    for(var i = 0; i < r[0].children.length; i++){
        r[0].children[i + 1].style.display = "flex";
    }
}

r[0].onclick = function(){
    for(var j = 0; j < s[0].children.length; j++){
        s[0].children[j+1].style.display = "flex";
    }
}

p1[0].onclick = function(){
    for(var i = 0; i < r1[0].children.length; i++){
        r1[0].children[i + 1].style.display = "flex";
    }
}

r1[0].onclick = function(){
    for(var j = 0; j < s1[0].children.length; j++){
        s1[0].children[j+1].style.display = "flex";
    }
}
// for(var i = 0; i < r[0].children.length; i++){
//     r[0].children[i+1].onclick = function(){
//         for(var j = 0; j < s[0].children.length; j++){
//             s[0].children[j+1].style.display = "flex";
//         }
//     }
// }


// var p1 = document.getElementsByClassName("p1");
// var r1 = document.getElementsByClassName("r1");
// var s1 = document.getElementsByClassName("s1");

// p1[0].onclick = function(){
//     for(var i = 0; i < r1[0].children.length; i++){
//         r1[0].children[i+1].style.display = "flex";
//     }
// }
// for(var i = 0; i < r1[0].children.length; i++){
//     r1[0].children[i+1].onclick = function(){
//         for(var j = 0; j < s1[0].children.length; j++){
//             s1[0].children[j+1].style.display = "flex";
//         }
//     }
// }
