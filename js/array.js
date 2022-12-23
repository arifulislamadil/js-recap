const numbers = [22,44,5,99,100,200]
console.log(numbers[2])
console.log(numbers.indexOf(555))

const numbers1 = [22,44,5,99,100,200]
const addNewNum = numbers1.unshift(333)
console.log(numbers1)

const names = ["adil","abara","akash"]
names["new-member"]="Tadil";
console.log(names)


const names = ["adil","abara","akash"]
if(names.indexOf("ad")!==-1){
    console.log("found")
}else{
    console.log("not found")
}