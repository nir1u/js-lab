let num;
do {
    num = prompt("Enter a number:");
    num = parseInt(num);
} while (num !== 0);
console.log("The number is 0");