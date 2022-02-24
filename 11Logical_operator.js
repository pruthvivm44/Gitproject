//Using logical OPERATORS --or || and &&,!
const password="pfffffassw$12";
if(password.length>=12 && password.includes('$')){
    console.log("That Password is migth strong Enough");
}else if(password.length>=8 && password.includes('$')){
    console.log("The passwod is long enough");
}else{
    console.log("The password contains atleast 8 characters");
}

//Logical NOT (!)
let user=false;
if(user){

}
//console.log(true); in console True
//console.log(false); in console False
console.log(!true);  //in console false
console.log(!false); //in console true

let user1=false;
if(!user1){
    console.log("User must be log on ")
}
console.log(!true);
console.log(!false);