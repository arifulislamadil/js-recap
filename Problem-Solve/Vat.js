const bill = 1500;

const func2 = (b) => {
    if(b<1500){
        return `Congratulations you don't have to pay vat and your toal is ${b}`
    }
    else if(b>=1500){
        const vat = b *.20;
        const total = vat + b;
        return `You vat is  ${vat} and you have total is ${total}`;
    }
  };

const result = func2(bill);
console.log(result);
