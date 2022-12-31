document.getElementById("add-btn").addEventListener("click", function () {
    //Input one
    const inputOne = document.getElementById("input-one");
    const inputOneValue = inputOne.value;
    const inputOneparse = parseInt(inputOneValue);
    inputOne.value = ""

    //Input two
    const inputTwo = document.getElementById("input-two");
    const inputTwoValue = inputTwo.value;
    const inputTwoParse = parseInt(inputTwoValue);
    inputTwo.value = ""

    // add two value
    const total = inputOneparse + inputTwoParse;

    //Display two number
    const displayNumber = document.getElementById("add-two-number");
    const displayNumberinner = displayNumber.innerText;
    const displayNumberParse = parseInt(displayNumberinner);
    const totalAmount = total + displayNumberParse
    displayNumber.innerText = totalAmount;

})