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

function operate(e){
    let screen = document.querySelector('.calcScreen');
    num2 = Number.parseFloat(screen.textContent);
    screen.textContent = "";
    let ans;
    if(operator === "+"){ans = add(num1, num2);}
    else if(operator === "-"){ans = subtract(num1, num2);}
    else if(operator === "*"){ans = multiply(num1, num2);}
    else if(operator === "/"){ans = divide(num1, num2);}
    screen.textContent = ans;
}

function setOperator(e){
    let screen = document.querySelector('.calcScreen');
    console.log("clicked");
    if(this.textContent === "+"){
        operator = "+";
        num1 = Number.parseFloat(screen.textContent);
        screen.textContent = "";
    }

}

function printSymbol(e){
    let screen = document.querySelector('.calcScreen');
    if(this.classList.contains("AC")){screen.textContent = "";}
    else if(this.classList.contains('DEL')){screen.textContent = screen.textContent.slice(0,-1);}
    else if(this.classList.contains('operator')){return;}
    else{
        let text = this.getAttribute('id');
        screen.textContent += text;
    }
    

}

let num1;
let num2;
let sum;
let operator;

let numbers = document.querySelectorAll('.button');
numbers.forEach(number => number.addEventListener('click', printSymbol));

let operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', setOperator));

let equals = document.querySelector(".equals");
equals.addEventListener("click", operate);

