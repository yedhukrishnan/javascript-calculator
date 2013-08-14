function equals(operator) {
    var number1 = returnInteger(document.getElementById("number1").value);
    var number2 = returnInteger(document.getElementById("number2").value);
    if(number1 != "Invalid" && number2 != "Invalid") {
        var result = calculateResult(number1, number2, operator);
        document.getElementById("result").value = result;
    }
    else
        document.getElementById("result").value = "Invalid Input";
}

function calculateResult(number1, number2, operator) {
   return eval(number1 + operator + number2);
}

function returnInteger(stringNum) {
    try {
        var intNum = parseInt(stringNum);
        var regEx = /\d+/;
        if(regEx.test(stringNum))
            return intNum;
        else
            throw new Error;
    } catch (x) {
        return "Invalid";
    }
    
}
