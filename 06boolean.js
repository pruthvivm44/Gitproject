//boolean & comparisions
console.log(true,false);
console.log(true,false,"true","false");

//methods can return booleans
let email="pruthvi1999@gmail.com"
let result=email.includes('@'); //or ('$') for false
console.log(result);

let names=['pruthvi','balu','gowda'];
let res=names.includes('pruthvi');//or ('ken)
console.log(res);

//comparision operators
let age =25;
console.log(age == 24);
console.log(age>20);
console.log(age<30);
console.log(age!=25);

//type conversion
let score=100;
console.log(score + 1);
let scores='100';
console.log(scores + 1);