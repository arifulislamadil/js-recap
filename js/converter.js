function mdToGb(mb){
 return mb/1000
}
console.log(mdToGb(3000))


//inch to feet

function incheToFeet(inches){
    return inches /12;
}
console.log(incheToFeet(24))

//faranhite to celcious


function faranhiteToCel(faran){
    const getCel = (faran - 32) * 5/9;
    return getCel.toFixed(0)

}
console.log(faranhiteToCel(78)) 


function kmToMile(km){
    return km /1.609
}
console.log(kmToMile(50)) 


const myNum = -3;
const output = Math.abs(myNum);
console.log(output)

const myNum1 = 2.5;
const output1 = Math.ceil(myNum1);
console.log(output1)


const myNum2 = 2.04;
const output2 = Math.ceil(myNum2);
console.log(output2)

const myNum3 = 2.04;
const output3 = Math.random(myNum3)*10;
console.log(output3)
const outputRound = Math.round(output3)
console.log(outputRound)

const myNum4 = 2.51;
const output4 = Math.round(myNum4);
console.log(output4)

const myNum5 = 2.04;
const output5 = Math.ceil(myNum5);
console.log(output5)


const myNum6 = 10;
const output6 = Math.random(myNum6)*10;
const outputRound1 = Math.round(output6)
console.log(outputRound1);

const names = ["abir","anfal","ashik","sajjad"];
for(let i =0; i<names.length; i++){
    const name = names[i];
    const output7 = Math.random() * name
    console.log(output7)
}


const friendsName = ["arif", "abir","adnan","ashik","sajjad","talha","azim","kalbi"];

const treatToday =(friendsName)=>{
    const totalNumber = friendsName.length;
    const outPutRandom4 = Math.floor(Math.random()*totalNumber);
    const get = friendsName[outPutRandom4]
  const getId= document.getElementById("count-el");
  getId.innerHTML=`
  ${get}
  `

}




for(let i =0; i<=10;i++){
    if(i%3==0){
      console.log(i) 
    }
}

const numbersList = [2,3,7,10,555,2,77,103,55]
const selfNumbers = [3,4,5,7,9]
const evenNum=(numbersList)=>{
    const filt = numbersList.filter(num => num % 2==0);
    const odd = numbersList.filter(num => num % 2!=0);
    console.log(odd)
   return filt;
}
const outputEven = evenNum(numbersList);
console.log(outputEven)
const selfNumber = evenNum(selfNumbers);
console.log(selfNumber)
