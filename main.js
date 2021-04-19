
// První příklad - vypiš vzestupně čísla od 0 do 10

console.log('První příklad - Vypiš vzestupně čísla od 0 do 10');


/*for (let i = 1; i<=10; i = i + 1) {

    console.log(i);
    }
*/

let i = 1;
while (i <= 10) {
    console.log(i++);
    
}

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - vyzkoušej, jaký je rozdíl mezi <= a<');
//TADY NAPIS CYKLUS

/*for (let i = 1; i<10; i = i + 1) {

    console.log(i);
}
*/
let j = 1;
while (j < 10) {
    console.log(j++);
    
}


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS



/* for (let i = 10; i>=0; i = i - 1) {

    console.log(i);
    }

*/

let k = 10;
while (k >= 0) {
    console.log(k--);   
}