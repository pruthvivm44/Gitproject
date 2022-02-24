//Numbers dtatype
let radius =10;
const pi=3.142;
console.log(radius,pi)
//Math Operators +, -, *, /, **, %
console.log(10+2);
console.log(10-2);
console.log(10*2);
console.log(10/2);
console.log(10**2);
console.log(10%2);

//template strings
const title='python programming';
const author=' guido rossum';
const likes=30;

//Concatenation way
//let result='the book called '+ title +' written by '+ author +' has '+ likes +' likes';
//console.log(result);

//template string way
let result=`the book called ${title} written by ${author} has ${likes} likes`;
console.log(result)

//creating html templates
let html =`
<h2>${title}</h2>
<p>by ${author} </p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);