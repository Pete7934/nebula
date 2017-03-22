/*var boks1 = false;
function showBox1() {
    if (boks1) {
        document.getElementById("bundBox1").style.display = "none";
        boks1 = !boks1;
    }
        else {
            document.getElementById("bundBox1").style.display = "flex";
            boks1 = !boks1;
        }
}
*/
var box = document.getElementsByClassName("box");
for (var i = 0; i < box.length; i++){
    box[i].addEventListener("click", function (e){
        e.target.classList.toggle("is-visible");
    });
}