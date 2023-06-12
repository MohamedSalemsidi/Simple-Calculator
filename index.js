// Variable Numbers 
// let zero = document.getElementById('zero');
// let one = document.getElementById('one' );
// let two = document.getElementById('two') ;
// let three = document.getElementById('three') ;
// let four = document.getElementById('four' ) ;
// let five = document.getElementById('five') ;
// let six = document.getElementById('six') ;
// let seven = document.getElementById('seven') ;
// let eight = document.getElementById('eight') ;
// let nine = document.getElementById('nine') ;
// let comma = document.getElementById('comma') ;


// let plus = document.getElementById('plus');
// let mult = document.getElementById('mult');
// let sub = document.getElementById('sub');
// let division = document.getElementById('division');
// let equal = document.getElementById('equal');

// zero = 0;
// one = 1;
// two = 2;
// three = 3;
// four = 4;
// five = 5;
// six = 6;
// seven = 7;
// eight = 8;
// nine = 9;
// comma = ',';

// plus = '+';
// toString(plus);
// sub = '-';
// mult = '-';
// division = '/';


// let clear = document.getElementById('clear');
// console.log(zero, one, two, three, four, five, six, seven , eight, nine, comma, equal,division, mult, plus, sub, division)


// let sum = document.getElementById('sum');
// let xmark = document.getElementById('xmark');

// function sums(e) {
//     // e.setAtrribute('name', 'num');
//     sum.innerHTML += e
// }
// console.log(clear)
// clear.onclick = function() {
//      sum = '';
// }

// zero.onclick = function() {
//     sum.innerHTML += zero;
// }
// one.onclick = function(){
//     sum.innerHTML += one;
// }
// two.onclick =function() {
//     sum.innerHTML += two;
// }
// three.onclick =function(){
//     sum.innerHTML = three;
// }
// four.onclick =function(){
//     sum.innerHTML = four;
// }
// five.onclick =function(){
//     sum.innerHTML = five;
// }
// six.onclick =function() {
//     sum.innerHTML = six;
// }
// seven.onclick =function() {
//     sum.innerHTML = seven;
// }
// eight.onclick =function() {
//     sum.innerHTML = eight;
// }
// nine.onclick =function(){
//     sum.innerHTML = nine;
// }
// plus.onclick =function() {
//     sum.innerHTML = plus;
// }
// sub.onclick =function(){
//     sum.innerHTML = sub;
// }
// mult.onclick =function() {
//     sum.innerHTML = mult;
// }
// division.onclick =function() {
//     sum.innerHTML = division;
// }

let sum = document.getElementById('sum');
function show(num) {
    sum.value += num;
}
let clear = document.getElementById('clear');

clear.onclick = function() {
    sum.value = '';
}

let deletes = document.getElementById('xmark');

deletes.onclick = function() {
    sum.value = sum.value.slice(0, -1);
}
let equal = document.getElementById('equal');

function calc() {
    try {
       sum.value = eval(sum.value);
    }
    catch(err) {
        sum.value = 'type error';
    }
}

equal.addEventListener('click', calc);