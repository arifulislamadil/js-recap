const addNum = (num1, num2) => {
    return num1 + num2
}
const minusNum = (num1, num2 = 3) => {
    return num1 - num2
}
const mulNum = (num1, num2 = 3) => {
    return num1 * num2
}
const devisionNum = (num1, num2 = 3) => {
    return num1 / num2
}

console.log("2 number addition", addNum(2, 5))
console.log("2 number minus", minusNum(10, 20))
console.log("2 multiaplication", mulNum(15, 30))
console.log("2 devision", devisionNum(20, 50))


const arrayAdd = (dev, numbers) => {
    let addNumber = dev
    for (var i = 0; i < numbers.length; i++) {
        addNumber /= numbers[i]  // 50/2=25/22
    }
    return addNumber
}
//additon
const addNumbers = (numbs) => {
    let addNumber = 0
    for (var i = 0; i < numbs.length; i++) {
        addNumber += numbs[i]
    }
    return addNumber
}

const numbs = [2, 2, 2, 8, 10]
const totalNumbs = addNumbers(numbs)
console.log(totalNumbs)

// substruction
const substructionNum = (secondNumbs, minusNumbs) => {
    let addNumber = secondNumbs
    for (var i = 0; i < minusNumbs.length; i++) {
        addNumber -= minusNumbs[i]
    }
    return addNumber
}

const secondNumbs = 10
const minusNumbs = [2]
const subNum = substructionNum(secondNumbs, minusNumbs)
console.log(subNum)

//Multiaplication
const multiNum = (numbers) => {
    let addNumber = 1
    for (var i = 0; i < numbers.length; i++) {
        addNumber *= numbers[i]
    }
    return addNumber
}

const numbss = [2, 2, 2]
const totalNum = multiNum(numbss)
console.log(totalNum)

//devision
const divison = (devidadNum, numbers) => {
    let devi = devidadNum;
    for (let i = 0; i < numbers.length; i++) {
        devi /= numbers[i]
    }
    return devi;
}

const numbers = [2]
const devidadNum = 50
const totalNumbers = divison(devidadNum, numbers)
console.log(totalNumbers) 
