/* Simple Calculator Scripts */
function equals() {
    var id = document.getElementById('mainForm');
    var calcInput = id.result.value;
    var calcResult = document.getElementById('mainResult');
    console.log(calcInput);
    console.log(eval(calcInput));
    calcResult.equalResult.value = eval(calcInput);
    calcInput = eval(calcInput);
    id.result.innerHTML = eval(calcInput);
}

function clearAll() {
    var id = document.getElementById('mainForm');
    var calcInput = id.result.value;
    var calcResult = document.getElementById('mainResult');
    var resultField = calcResult.equalResult.value;
    resultField = " ";
    calcResult = " ";
}
