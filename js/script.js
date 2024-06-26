// 1 - getElementById('MIO_ID'): seleziona un elemento attraverso il suo id
let h2 = document.getElementById('title-card');
console.log(h2);

//2 - querySelector('.classe'): seleziona il primo elemento avente un determinato selettore css;
let square = document.querySelector('.square.gold'); //all'interno delle parentesi uso la sintassi di CSS. Anche per i selettori avanzati
console.log(square);

//3 - querySelectorAll('.classe'): seleziona tutti gli elementi aventi un determinato selettore css;
let gold_squares = document.querySelectorAll('.square.gold');
console.log(gold_squares);

//4 - getElementsByClassName('classe1 classe2 eccc'): seleziona tutti gli elementi avanti determinate classi;
let red_squares = document.getElementsByClassName('square red'); //prende tutti gli elementi con le classi square E red
console.log(red_squares);

let red = document.getElementsByClassName('red'); //prende tutti gli elementi con la classe red
console.log(red);


