window.onload = function(){   
var box = document.getElementsByClassName("box");
for (var i = 0; i < box.length; i++){
    box[i].addEventListener("click", function (e){
        e.target.classList.toggle("show-list");
        console.log(e);
    });
}
}