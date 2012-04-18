"use strict"

//var age = "1994-03-09";
var age =  prompt ("När är du född? (ÅÅÅÅ-MM-DD)");

// var yourName = "

var div = 365.25 * 24 * 60 * 60 * 60 * 1000;




var rightNow = new Date ();

//var diff = rightNow.getTime () - Date.parse(age);

var year  = rightNow.getFullYear() - age.substr(0, 4);
var month = rightNow.getMonth() + 1 - age.substr(5, 2);
var day   = rightNow.getDate() - age.substr(8, 2);
if ( day < 0 ) {
    month -= 1;
    var sub;
    // Vilken månad är det?
    switch ( rightNow.getMonth() ) {
    case 0:
        sub = 31;
        break;
    case 1:
        if ( rightNow.getFullYear() % 4 === 0 ) {
            sub = 29;
        } else {
            sub = 28;
        }
        break;
    case 2:
        sub = 31
        break;
    case 3:
        sub = 30
        break;
    case 4:
        sub = 31
        break;
    case 5:
        sub = 30
        break;
    case 6:
        sub = 31
        break;
    case 7:
        sub = 31
        break;
    case 8:
        sub = 30
        break;
    case 9:
        sub = 31
        break;
    case 10:
        sub = 30
        break;
    case 11:
        sub = 31
        break;
    }
    day = day + sub;
}
if ( month < 0 ) {
    year -= 1;
    month = month + 12;
}
if ( month > 12 ) {
    year + 1;
    month = month - 12;
}



alert (" Du är " + year + " år, " + month + " månader och " + day + " dagar gammal.");









// function yourage {

