//? VIDEO_5 - STRINGS, PROPERTIES, METHOS AND TEMPLATE LITERALS IN JAVASCRIPE
console.log(`Tutorial-5`);

const myName = `Harry`;
const thisGreating = `Good Morning`;
console.log(thisGreating + ` ` + myName);

let html = '<h1>my Heading</h1>' + '<p>paragraph</p>';

html = html.concat(`this`, ' ', `is my concat`);
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
