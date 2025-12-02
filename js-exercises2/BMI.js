const weight = prompt("Enter your weight:(kg)");
const height = prompt("Enter your height:(cm)");

let BMI = (height/(weight**2));

if (BMI < 18.5){
    console.log("you are Underweight");
}else if(BMI > 18.5 && BMI < 25){
    console.log("you are Healthy");
}else if(BMI > 25 && BMI < 30){
    console.log("you are Overweight");
}else{
    console.log("oh you are Obesity");
}
