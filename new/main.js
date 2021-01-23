const text1 = document.querySelector(".part-1");
const text = document.querySelector(".part1-text1");
text1.addEventListener("mousemove", showCoords);
function showCoords(event) {
    var x = event.clientX; 
    var y = event.clientY;
    text.style.top = y + "px";
    text.style.left = x + "px";

}
