const names =["abul", "babul","arif","sharif" ,"cabul", "dabul", "ebul", "fabul","arif", "babul", "ebul","babul","arif","gabul",
"abul","habul","dabul"];

const removeDuplicate=(names)=>{
    let storeName =[]
   for(name of names){
     if(storeName.indexOf(name)==-1){
        storeName.push(name)
     }
   }
    return storeName;
}
const output = removeDuplicate(names)
console.log(output)