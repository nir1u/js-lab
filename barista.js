const nCoffee = prompt("How many coffees do you want?");
let price = 0;
let latte = 0, mojito = 0, icedLatte = 0;

for (let i = 0; i < nCoffee; i++) {
  let choice = prompt("Which one? 1/ Latte $5  2/ Mojito $6  3/ Iced Latte $8");

  if (choice === 1) {
    latte++;
    price += 5;
  } else if (choice === 2) {
    mojito++;
    price += 6;
  } else if (choice === 3) {
    icedLatte++;
    price += 8;
  } else {
    alert("Invalid number, please try again.");
    i--;
  }
}

let discount = 0;
if (nCoffee > 3) {
  discount += price * 0.1;
}

if (latte >= 3) {
  discount += latte * 5 * 0.2;
}

if (mojito >= 3) {
  discount += mojito * 6 * 0.2;
}

if (icedLatte >= 3) {
  discount += icedLatte * 8 * 0.2;
}
let total = price - discount;

console.log("~~~~~~~~~  ORDER SUMMARY  ~~~~~~~~~");
console.log("Latte: " + latte);
console.log("Mojito: " + mojito);
console.log("Iced Latte: " + icedLatte);
console.log("Total before discount: $" + price);
console.log("Discount: $" + discount);
console.log("Final total: $" + total);
