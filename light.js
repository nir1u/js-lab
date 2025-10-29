let light;
while (true) {
    light = prompt("Enter the color of the light :");
    if (light === "red") {
        console.log("green");
    } else if (light === "yellow") {
        console.log("red");
    } else if (light === "green") {
        console.log("yellow");
    } else {
        console.log("the color is unvailable");
    }
}