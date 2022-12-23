
const numbers = [2,4,99,4,55,77,101]
for(let i =0; i<numbers.length;i++){
    let number = numbers[i];
    if(number > 90){
        continue;
    }
    console.log(number)
}
