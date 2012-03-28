/* // funktion kan deklareras så här

function dubbla(x) {
    return 2 * x;
}
console.log(dubbla(3));
console.log(dubbla(12));
console.log(dubbla(Math.PI));

// function expression
var halvera(x) {
    return x / 2;
}
*/
// Variablers räckvidd (scope)

var a = 10;
function kvadrat(x) {
    a=a * a; //global variabel
}
kvadrat(88);
console.log(a);

var b = 10;
function kubik(x) {
    var b; //lokal variabel
    b = b * b * b;
}
console.log(b);
kubik(b);
console.log(b);

// Framtida JavaScript kommer ha "block scope"
// Ännu bara i FFox
// under vissa omständigheter

let c = 5;

{
    let c = 10;
    console.log(c);
    }
console.log(c);

// När du börjar lämna nybörjarnivån, så undvik globala variabler. Risk för krockar!'

// Self executing/invoking anonymous function
(function () {
    // Code goes here
}());
