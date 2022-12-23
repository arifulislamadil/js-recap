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