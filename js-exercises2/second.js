const number1 = prompt("Enter one number:");
const number2 = prompt("Enter another number:");
const number3 = prompt("Enter another one :");

if (number1 > number2 && number2 > number3 || number1 < number2 && number2 < number3){
    console.log(number2 + " is beetween them");
}
else if (number1 > number2 && number2 < number3 ||number2 > number3 && number3 > number1){
    console.log(number3 + " is beetween them");
}
else{
    console.log(number1 + " is beetween them");
}