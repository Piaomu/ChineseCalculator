let numOne = document.getElementById("numOne").value;
let numTwo = document.getElementById("numTwo").value;

document.getElementById("submitBtn").addEventListener("click", ()=>
{
doMath();

})

function doMath()
{
let add = document.getElementById("Add");
let subtract = document.getElementById("Subtract");
let multiply = document.getElementById("Multiply");
let divide = document.getElementById("Divide");
let result = "";

if (add.checked)
{
  result = addDigits();
} else if (subtract.checked)
{
  result = subtractDigits();
} else if (multiply.checked)
{
  result = multiplyDigits();
} else if (divide.checked)
{
  result = divideDigits();
};

return parseInt(result);
}

function translateToChinese()
{
// Tranlation Map
const valueMap = new Map();

valueMap.set(0, "零");
valueMap.set(1, "一");
valueMap.set(2, "二");
valueMap.set(3, "三");
valueMap.set(4, "四");
valueMap.set(5, "五");
valueMap.set(6, "六");
valueMap.set(7, "七");
valueMap.set(8, "八");
valueMap.set(9, "九");
valueMap.set(10, "十");
valueMap.set(100, "百");
valueMap.set(1000, "千");

// Output Variables
let result = doMath();
let output = "";

if(result === 0 && result < 10)
{
output = valueMap.get(result);
} else if(result > 10 && result < 20)
{
  output = (valueMap.get(10)) + (valueMap.get(result-10));
} 
}

// Simple arithmetic.
function addDigits()
{
  return numOne + numTwo;
}

function substractDigits()
{
  return numOne - numTwo;
}

function multiplyDigits()
{
  return numOne * numTwo;
}

// Don't forget to round this number.
function divideDigits()
{
  return numOne / numTwo;
}

// These functions translate the result into Chinese

/*If the result is between 10-19, concat "十" + “result - 10” etc*/