
var x

function addButton(){

    // first get the user input numbers and perform operation
    var firstNumber = document.forms["numberInputs"]["firstNumber"].value;
    var secondNumber = document.forms["numberInputs"]["secondNumber"].value;
    x = Number(firstNumber) + Number(secondNumber);

    // Update result onscreen with calculated result
    let result = document.getElementById("result")
    result.innerHTML = x

    // Limit digits passed the decemal point if more than 4
    let afterDecimalPoint = result.innerHTML.toString().split('.')[1]

    if(afterDecimalPoint>4){
        result.innerHTML = x.toFixed(4);
    }

}

function subtractButton(){

    // first get the user input numbers and perform operation
    var firstNumber = document.forms["numberInputs"]["firstNumber"].value;
    var secondNumber = document.forms["numberInputs"]["secondNumber"].value;
    x = Number(firstNumber) - Number(secondNumber);

    // Update result onscreen with calculated result
        let result = document.getElementById("result")
    result.innerHTML = x

    // Limit digits passed the decemal point if more than 4
    let afterDecimalPoint = result.innerHTML.toString().split('.')[1]
    if(afterDecimalPoint>4){
        result.innerHTML = x.toFixed(4);
    }
}

function multiplyButton(){

    // first get the user input numbers and perform operation
    var firstNumber = document.forms["numberInputs"]["firstNumber"].value;
    var secondNumber = document.forms["numberInputs"]["secondNumber"].value;
    x = Number(firstNumber) * Number(secondNumber);

    // Update result onscreen with calculated result
        let result = document.getElementById("result")
    result.innerHTML = x

    // Limit digits passed the decemal point if more than 4
    let afterDecimalPoint = result.innerHTML.toString().split('.')[1]
    if(afterDecimalPoint>4){
        result.innerHTML = x.toFixed(4);
    }
}

function divideButton(){

    // first get the user input numbers and perform operation
    var firstNumber = document.forms["numberInputs"]["firstNumber"].value;
    var secondNumber = document.forms["numberInputs"]["secondNumber"].value;
    x = Number(firstNumber) / Number(secondNumber);

    // Update result onscreen with calculated result
        let result = document.getElementById("result")
    result.innerHTML = x

    // Limit digits passed the decemal point if more than 4
    let afterDecimalPoint = result.innerHTML.toString().split('.')[1]
    if(afterDecimalPoint>4){
        result.innerHTML = x.toFixed(4);
    }
}

function clearCalculator(){

    // clear calculator inputs and result
    document.querySelector("#firstNumber").value = "";
    document.querySelector("#secondNumber").value = "";
    document.querySelector("#result").innerHTML = "";
 
}
