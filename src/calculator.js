function equals() {
    var number1 = returnInteger(document.getElementById("number1").value);
    var number2 = returnInteger(document.getElementById("number2").value);
    var sum = number1 + number2;
    document.getElementById("result").value = sum;
}

function sum(number1, number2) {
   return number1 + number2;
}

function returnInteger(stringNum) {
    var intNum = parseInt(stringNum);
    var regEx = /\d+/;
    if(regEx.test(stringNum))
        return intNum;
    else
        throw new Error;
}
