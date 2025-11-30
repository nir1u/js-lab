let count = 0;

function changrColor(){
    const counter = document.getElementById("counter"); 
    counter.textContent = count;

    if (count >= 0 && count < 5) {
        counter.style.color = "green";
    } else if (count >= 5 && count < 10) {
        counter.style.color = "yellow";
    } else {
        counter.style.color = "red";
    }
}
function increase(){
    count++;
    changrColor();
}
function decrease(){
    count--;
    changrColor();
}