/*
What is JSON?
JSON = JavaScript Object Notation
Language independent and user-readable, depends only on 2 data structures that are
found in all modern programming languages
1.-Collection of name-value pairs
Comparable to objects. Think JavaScript object properties "stringified"
2.-Ordered list of values
Comparable to arrays. Think ability to pack collections of objects into single file for transfer
*/
/*
BASICS : JSON FORMAT
STRINGIFY : JAVASCRIPT TO JSON
PARSE : JSON TO JAVASCRIPT
*/
//object format
const book = {tittle: "1984", author:"George Orwell", isAviable:false};
//Converted to JSON
const bookJSON = JSON.stringify(bookJSON);
console.log(bookJSON);
/*
2. - JSON Format
Data in name-value pairs that are separated by commas
Exzmple: {tittle: "1984", author:"George Orwell", isAviable:false}
{} - enclose single objects 
[] - enclose multi-item arrays
[
    {tittle: "1984", author:"George Orwell", isAviable:false},
    {tittle: "1984", author:"George Orwell", isAviable:false},
    {tittle: "1984", author:"George Orwell", isAviable:false},
    {tittle: "1984", author:"George Orwell", isAviable:false}
]   
*/
/*
3.-JSON.stringify
Serialize a JavaScript Object into an equivalent text string
var json = JSON.stringify(book);
console.log(book);

Serialize a collection of JavaScript Objects into an order list
var copies = [book, book];
var json =  JSON.stringify(copies);
console.log(json);
*/
/*
4.- JSON.parse()
Desearilize a JSON-formatted text string into a JavaScript Object

-json text 
var jsonObj = '{"title":"Becoming","author":"Michelle Obama", "isAviable":true}';

-json object
var book = JSON.parse(jsonObj);
console.log(book.title); - becoming

Desearilize a JSON-formatted text string into a JavaScript array
-var jsonArray = '[{"title":"Becoming"}, {"tittle":"1984"}]';
var books = JSON.parse(jsonArray);
console.log(books[1].title)
*/ 
