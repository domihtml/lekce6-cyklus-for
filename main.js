
// První příklad

console.log('První příklad - Vypiš vzestupně čísla od 0 do 10');


/*for (let i = 0; i<=10; i = i + 1) {

    console.log(i);
    }
*/

let i = 0;
while (i <= 10) {
    console.log(i++);
    
}

// Druhý příklad 

console.log('Druhý příklad - vyzkoušej, jaký je rozdíl mezi <= a<');

/*for (let i = 0; i<10; i = i + 1) {

    console.log(i);
}
*/
let j = 0;
while (j < 10) {
    console.log(j++);
    
}


// Třetí příklad
console.log('Třetí příklad - sestupná řada 10 - 0');


/* for (let i = 10; i>=0; i = i - 1) {

    console.log(i);
    }

*/

let k = 10;
while (k >= 0) {
    console.log(k--);   
}