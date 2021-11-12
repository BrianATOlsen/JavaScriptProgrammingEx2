/*
    JavaScript Prog. Assignment 2
    Concatenation Ex 2
    Brian Olsen
    2021-11-11
*/

var firstName = 'Brian';
var lastName = 'Olsen';
var age = 38;
var birthCity = 'Fredericton';
var marriageStatus = false;
var firstJob = 'QM Construction';
var firstHourlyRate = 10;
let dollarUSLocale = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

var text = `Hello, ${firstName} ${lastName}. You are ${age} years old and were born in ${birthCity}, and currently live in Fredericton.
Your first job was at ${firstJob} making ` + dollarUSLocale.format(firstHourlyRate) + `/hour.
I asked if you were married and you said ${marriageStatus}.`;

console.log(text);
