let numOne = document.getElementById("numOne").value;
let numTwo = document.getElementById("numTwo").value;

document.getElementById("submitBtn").addEventListener("click", ()=>
{

let add = document.getElementById("Add");
let subtract = document.getElementById("Subtract");
let multiply = document.getElementById("Multiply");
let divide = document.getElementById("Divide");
})


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