function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operate(operator, num1, num2){
    let ans;
    if(operator === "+"){ans = add(num1, num2);}
    else if(operator === "-"){ans = subtract(num1, num2);}
    else if(operator === "*"){ans = multiply(num1, num2);}
    else if(operator === "/"){ans = divide(num1, num2);}
    return ans;
}

console.log(operate("+", 2, 3)); // 5
console.log(operate("-", 2, 3)); //-1
console.log(operate("*", -2, 3)); //-6
console.log(operate("/", 2, 3)); //0.66

