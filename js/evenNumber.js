const evenNum = () => {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

evenNum()


const evenNumArray = (numbers) => {
    let store = []
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        if (number % 2 == 0) {

            store.push(number);
        }
    }
    return store;
}

console.log(evenNumArray([2, 5, 10, 15, 22,10,44]));

for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}