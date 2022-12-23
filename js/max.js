const business = 850;
const minister=900;
const army=600;

if(business>minister && business>army){
    console.log("bussiness is bigger")
}else if(minister>business && minister>army){
    console.log("minister is bigger")
}else{
    console.log("army is bigger")
}