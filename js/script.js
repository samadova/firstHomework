"use strict";

const userName = 'John';
let userNumber  = 25;
    userNumber = 24;

    console.log(userName, userNumber);



// const result = confirm("Are you here?");
//       console.log(result);

// const answer = +prompt("Вам есть 18?" , "18");
// console.log(answer + 5);

const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваше фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

console.log(typeof (answers));
console.log(typeof (null));


// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';

// alert(`Привет, ${user}`);


console.log(4 + "5"); 



let incr = 10,
    decr = 10;


// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);


console.log(5%2);

console.log(2 + 2 * 2 !== '6');


const isChecked = false;
const isClose = false;
      
console.log(isChecked || !isClose);
