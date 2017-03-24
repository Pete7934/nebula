window.onload = function(){   
var box = document.getElementsByClassName("box");
for (var i = 0; i < box.length; i++){
    box[i].addEventListener("click", function (e){
        e.target.classList.toggle("show-list");
        console.log(e);
    });
}


branch = document.getElementsByClassName('udforsk');
    for(var l = 0; l < branch.length; l++){
        console.log(branch[l]);
        branch[l].addEventListener('click', function(){
            var temp = this.getAttribute('value');
            clearDisplay(temp);
        });
    }
}
function clearDisplay(temp){
    var content = document.getElementsByClassName("content");
    for(var i = 0; i < content.length; i++){
        if(content[i].getAttribute("id")==temp){
            content[i].style.display = "block";
            
        }
        else{
            content[i].style.display = "none";
        }
    }
}