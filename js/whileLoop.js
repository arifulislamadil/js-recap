let num = 1;
while(num<=20){
    console.log(num)
    console.log("hello");
    num+=2;
    if(num > 10){
        console.log("your work is done take a break");
        break;
    }
}


for(let i = 1; i < 10; i+=2){
    console.log(i)
}

const names = ['arif', 'sharif', 'nooralam']
for(let i = 1; i<names.length;i++){
    console.log(names[i])
}


for(let i = 0; i < 20; i+=2){
    console.log(i)
    if(i>10){
        continue;
    }
}