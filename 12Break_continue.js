//Break and Continue

const scores=[23,43,4,52,21,3,4,55,32,12];
for(let i=0; i<scores.length; i++){
    if(scores[i]===43){
        continue;
    }
    console.log('your score is :',scores[i]);
if (scores[i]===52){
    console.log("congrats");
    break;
}
}
