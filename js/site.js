document.getElementById("submitBtn").addEventListener("click", ()=>
{
translateToChinese();
})

function doMath()
{
let numOne = +document.getElementById("numOne").value;
let numTwo = +document.getElementById("numTwo").value;

let add = document.getElementById("Add");
let subtract = document.getElementById("Subtract");
let multiply = document.getElementById("Multiply");
let divide = document.getElementById("Divide");
let result = "";

if (add.checked)
{
  result = addDigits(numOne, numTwo);
} else if (subtract.checked)
{
  result = subtractDigits(numOne, numTwo);
} else if (multiply.checked)
{
  result = multiplyDigits(numOne, numTwo);
} else if (divide.checked)
{
  result = divideDigits(numOne, numTwo);
}

document.getElementById("output").innerHTML = result;
;

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

// Output Variables
let result = doMath();
let output = "";
console.log(result);
document.getElementById("output").innerHTML = result.value;
if(result <= 10)
{
output = valueMap.get(result);
} 
else if(result > 10 && result < 20)
{
// should output 十一，十二，十三，十四，十五，十六，十七，十八，十九
  output = (valueMap.get(10)) + (valueMap.get(result-10));

} 
else if(result === 20)
{
  // should output 二十
  output = (valueMap.get(2) + valueMap.get(10));
}
else if(result > 20 && result < 30)
{
// should output 二十一， 二十二，二十三，二十四，二十五，二十六，二十七，二十八，二十九
  output = (valueMap.get(2)) + (valueMap.get(10)) + (valueMap.get(result-20));
}
 else if(result === 30)
{
  output = (valueMap.get(3) + valueMap.get(10));
}
else if(result > 30 && result < 40)
{
  output = (valueMap.get(3)) + (valueMap.get(10)) + (valueMap.get(result-30));
}
 else if(result === 40)
{
  output = (valueMap.get(4) + valueMap.get(10));
}
else if(result > 40 && result < 50)
{
  output = (valueMap.get(4)) + (valueMap.get(10)) + (valueMap.get(result-40));
}
else if(result === 50)
{
  output = (valueMap.get(5) + valueMap.get(10));
}
else if(result > 50 && result < 60)
{
  output = (valueMap.get(5)) + (valueMap.get(10)) + (valueMap.get(result-50));
} 
else if(result === 60)
{
  output = (valueMap.get(6) + valueMap.get(10));
}
else if (result > 60 && result < 70)
{
  output = (valueMap.get(6)) + (valueMap.get(10)) + (valueMap.get(result-60));
}
else if(result === 70)
{
  output = (valueMap.get(7) + valueMap.get(10));
}
else if (result > 70 && result < 80)
{
  output = (valueMap.get(7)) + (valueMap.get(10)) + (valueMap.get(result-70));
}
else if(result === 80)
{
  output = (valueMap.get(7) + valueMap.get(10));
}
else if (result > 80 && result < 90)
{
  output = (valueMap.get(8)) + (valueMap.get(10)) + (valueMap.get(result-80));
}
else if(result === 90)
{
  output = (valueMap.get(7) + valueMap.get(10));
}
else if (result > 90 && result < 100)
{
  output = (valueMap.get(9)) + (valueMap.get(10)) + (valueMap.get(result-90));
}
else if (result === 100)
{
  output = (valueMap.get(1)) + (valueMap.get(100));
}
else 
{
  output = "Invalid operation."
}
document.getElementById("output").innerHTML = output;
}

// Simple arithmetic.
function addDigits(numOne, numTwo)
{
  console.log("numone check", numOne)
  return numOne + numTwo;
}

function subtractDigits(numOne, numTwo)
{
  return numOne - numTwo;
}

function multiplyDigits(numOne, numTwo)
{
  return numOne * numTwo;
}

// Don't forget to round this number.
function divideDigits(numOne, numTwo)
{
  return Math.round(numOne / numTwo);
}

document.getElementById("clearBtn").addEventListener("click", ()=>{
    document.getElementById("numOne").value = "";})

document.getElementById("clearBtn").addEventListener("click", ()=>{
    document.getElementById("numTwo").value = "";})
