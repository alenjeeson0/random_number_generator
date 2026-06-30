const submit = document.getElementById("submit");
const random1 = document.getElementById("random-number1");
const random2 = document.getElementById("random-number2");
const random3 = document.getElementById("random-number3");
const max = 100;
const min = 50;
let randomnumber1;
let randomnumber2;
let randomnumber3;

submit.onclick = function(){
    randomnumber1 = Math.floor(Math.random() * (max-min+1)) + min;
    random1.textContent = randomnumber1;

    randomnumber2 = Math.floor(Math.random() * (max-min+1)) + min;
    random2.textContent = randomnumber2;

    randomnumber3 = Math.floor(Math.random() * (max-min+1)) + min;
    random3.textContent = randomnumber3;
}