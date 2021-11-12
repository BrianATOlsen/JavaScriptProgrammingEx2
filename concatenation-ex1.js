/*
    JavaScript Prog. Assignment 2
    Concatenation Ex 1
    Brian Olsen
    2021-11-11
*/

console.log('Web and Mobile Application development was the program Fred entered in the Fall of 2019.');
console.log('Intro to Programming is going to be the course Fred likes best. Fred is going to study very hard.');
console.log('Each night Fred is going to spend time reviewing all of the course material.');
console.log('Fred will be committed to learning as much as possible about C# in 2019!');
console.log('');

var name = `Fred`;

var text = `Web and Mobile Application development was the program ` + name + ` entered in the Fall of 2019.\n` +
`Intro to Programming is going to be the course ` + name + ` likes best. ` + name + ` is going to study very hard.\n` +
`Each night ` + name + ` is going to spend time reviewing all of the course material.\n` +
`` + name + ` will be committed to learning as much as possible about C# in 2019!\n`;

console.log(text);

var text2 = `${name} was excited about starting his course at NBCC.\n` +
`Web and Mobile Application development was the program ${name} entered in the Fall of 2019.\n` +
`Intro to Programming is going to be the course ${name} likes best. ${name} is going to study very hard.\n` +
`Each night ${name} is going to spend time reviewing all of the course material.\n` +
`${name} will be committed to learning as much as possible about C# in 2019!\n`;

console.log(text2);


