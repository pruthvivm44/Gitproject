console.log(1);
console.log(2);
console.log(3);

//Code block
let age=30;

// if(true){
//     console.log('inside codeblock:',age)
// }
//     console.log('outside codeblock:',age)

// if(true){
//     age=40;
//     console.log('inside codeblock:',age);
// }
//     console.log('outside codeblock:',age);

if(true){
    let age=50;
    console.log('inside codeblock:',age);
     if(true){
        let age=70;
           console.log('Inside 2nd codeblock:',age);
    }
}
    console.log('outside codeblock:',age);
