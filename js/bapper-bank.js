document.getElementById("deposite-btn").addEventListener("click", function () {
    const depositeInput = document.getElementById("deposite-input-field");
    const depositeInputValue = depositeInput.value;
    let parseDepositeValue = parseInt(depositeInputValue)

    let depositeText = document.getElementById("deposite-text");
    const depoInner = depositeText.innerText;
    let depoTextParse = parseInt(depoInner)

    depoTextParse = depoTextParse + parseDepositeValue;
    depositeText.innerText = depoTextParse;
    depositeInput.value = ""

    // Balance 
    const balance = document.getElementById("balance-text");
    const balanceText = balance.innerText;
    let balanceParse = parseInt(balanceText)
    balanceParse += parseDepositeValue;
    balance.innerText = balanceParse
})

document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input-field");
    const withdrawValue = withdrawInput.value;
    let withdrawparse = parseInt(withdrawValue);
    console.log(withdrawparse)



    //Withdraw
    const withdrawText = document.getElementById("withdraw-text");
    const withdrawTextValue = withdrawText.innerText;
    let withdrawTextParse = parseInt(withdrawTextValue);
    withdrawTextParse += withdrawparse;
    withdrawText.innerText = withdrawTextParse


    //Clearn withdrawInpur 
    withdrawInput.value = ''

    //Balance

    let balance = document.getElementById("balance-text");
    const balanceText = balance.innerText;
    let balanceParse = parseInt(balanceText)
   const balanceTotal =balanceParse-withdrawparse;
    balance.innerText=balanceTotal


})