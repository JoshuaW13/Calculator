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

function printSymbol(e){
    let screen = document.querySelector('.calcScreen');
    if(this.classList.contains("AC")){screen.textContent = "";}
    else if(this.classList.contains('DEL')){screen.textContent = screen.textContent.slice(0,-1);}
    else{
        let text = this.getAttribute('id');
        screen.textContent += text;
    }
    

}

let numbers = document.querySelectorAll('.button');
numbers.forEach(number => number.addEventListener('click', printSymbol))


