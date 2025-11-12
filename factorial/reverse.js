let star = prompt("how many stars do you want?");
star = Number(star)
let line ="";

for(let i = 1 ; i <= star ; i++){
    line += "*";
    console.log(line)
}