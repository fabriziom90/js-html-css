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

//5 - classList, className, style: non servono per recuperare un elemento del DOM, ma sono delle proprietà degli elementi recuperati con i metodi indicati nei punti da 1 a 4
//5.1 classList
let class_list = document.getElementById('classlist');
console.log(class_list.classList); //ci restituisce con una determinata struttura dati (per ora vedetelo come un elenco) le classi applicate al tag

// con classList vanno a braccetto i metodi
// 1 - add('nome_classe'): aggiungo una classe al tag;
// 2 - remove('nome_classe'): rimuovo una classe al tag;
// 3 - toggle('nome_classe'): aggiungo o rimuovo una classe al tag a seconda se presente o meno
class_list.classList.add('fs-5');


// 5.2 className
let class_name = document.getElementById('classname');
console.log(class_name.className); //ci restituisce sotto forma di stringa le classi applicate al tag

// con className possiamo sovrascrivere o aggiungere delle classi
class_name.className = 'fw-bold'; //così sovrascrivo le classi già esistenti (nell'esempio erano text-center e text-warning)
class_name.className += ' text-success fs-2'; //così aggiungo le classi a quelle già esistenti.
// 5.3 style

let elem = document.getElementById('style');
console.log(elem.style); //recupera l'attributo style del tag con le relative proprietà. Se non è presente tale attributo, non viene preso

elem.style.backgroundColor = 'silver'; //aggiungo uno stile attravero l'attributo style. Nell'inspector vedrò quindi questo attributo comparire nel tag di riferimento;
elem.style.color = 'goldenrod';

elem.style.fontSize = ''; //così rimuovo la proprietà indicata

//addEventListener: aggiunge un evento ad un tag.
const button = document.getElementById('change-color'); //recupero il pulsante dal dom
console.log(button);

button.addEventListener('click', function () { //gli dico di rimanere in attesa/in ascolto di un evento click
    let big_square = document.querySelector('.big-square'); //recupero il quadrato grande
    // big_square.classList.remove('red'); //rimuovo la classe red
    // big_square.classList.add('gold'); //aggiungo la classe gold

    //aggiungo rimuovo la classe gold. Attenzione che la classe red, rimane sempre.
    big_square.classList.toggle('gold');
});

