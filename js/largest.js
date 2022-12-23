const largestNumber =(numbers)=>{
    let element = numbers[0];
    for(let i=0; i<numbers.length; i++){
        const num = numbers[i]
        if(num>element){
            element=num
        }
    }
    return element;
}

const numbers = [2,7,9,11,44,55,99,1];
const numbers2 = [-2,-3,-10];
const largestNum = largestNumber(numbers);
const largestNum2 = largestNumber(numbers2);
console.log(largestNum)
console.log(largestNum2)