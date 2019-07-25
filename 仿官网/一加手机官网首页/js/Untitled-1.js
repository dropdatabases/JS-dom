var Img = document.getElementById("clickI");
var Dengdan = document.getElementsByClassName("dengdan")[0];

Img.addEventListener("click",function(){

    Dengdan.style.opacity = "1";
    
    document.addEventListener("mouseup",move);
    function move(){
        Dengdan.style.opacity = "0";
    }
    
    Img.removeEventListener("mouseup",move);
});

var Eimg = document.getElementById("clickE");
var Gown = document.getElementsByClassName("gowu")[0];
Eimg.addEventListener("click",function(){
    Gown.style.opacity = "1";
    
    document.addEventListener("mouseup",move);
    function move(){
        Gown.style.opacity = "0";
    }
    
    Img.removeEventListener("mouseup",move);
})