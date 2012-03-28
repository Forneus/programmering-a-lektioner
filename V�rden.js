// Variablertyper och värdetyper

// Olika slags värden:
// tal
// text
// sant/falskt

// Mer exakt i JavaScript:
// number (både heltal och decimaltal)
// + Andra skiljer mellan "Integer" och "float"
// string - en sekvens av tecken
// typeof 5; // number
// typeof "5"; // string
// "5"+3="53" // kontaktenering = slå ihop strängar
// boolean är true/false

// Värden som är mindre vanliga:
// null
// undefined

// Sammansatta värdetyper:
// Object
// Function
// Array

// Omvandling mellan olika typer
// Explicit omvandling = jag bestämmer uttryckligen
// Omvandla till siffra (number)'
// Number("55");
// parseInt("55 sjuka sjökor", 10);
// +"55";
// Tal som börjar med en nolla är oktala = basen 8
// Omvandla till sträng (mindre vanligt)
//  String(foo);
//  ""+foo;
// Omvandla till boolskt värde
//  !!foo
// Dubbel negation "inte-inte"

// Vissa värden är "truthy" och andra "falsy" - SOM OM de vore true/false
// Alla siffror utom 0 är truthy
// Alla strängar är truthy
// Null och undefined är falsy

// Test
// 1=="1" // implicit konvertering sker
// 1==="1" // måste vara samma typ och samma värde
// "hej" && true
// 0 || "hej"           ingen typkonvertering
// "Arne" || "Bertil"

// 1/0
// 1/-0

// Math.PI
// Math.E
