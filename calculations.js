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

function modulo(num1,num2){
    return num1%num2;
}

function power(num1, num2){
    return num1**num2;
}

function operate(e){
    let screen = document.querySelector('.calcScreen');
    if(nextClick === true){
        num2 = Number.parseFloat(screen.textContent);
    }
    else if(nextClick === false){
        num1 = Number.parseFloat(screen.textContent);
    }

    if(typeof num1 === 'undefined'){ans = screen.textContent;}
    
    //screen.textContent = "";
    ans = screen.textContent;
    if(operator === "+"){ans = add(num1, num2);}
    else if(operator === "-"){ans = subtract(num1, num2);}
    else if(operator === "x"){ans = multiply(num1, num2);}
    else if(operator === "/"){ans = divide(num1, num2);}
    else if(operator === "%"){ans = modulo(num1,num2);}
    else if(operator === "Exp"){ans = power(num1,num2);}
    screen.textContent = ans;
    console.log(num1+ " "+ num2+ +""+operator+nextClick+ans);
    nextClick = false;
    
}

function setOperator(e){
    let screen = document.querySelector('.calcScreen');
    if(this.textContent === "+"){
        operator = "+";
        if(screen.textContent != ""){num1 = Number.parseFloat(screen.textContent);}
        screen.textContent = "";
        nextClick = true;
    }
    else if(this.textContent === "×"){
        operator = "x";
        if(screen.textContent != ""){num1 = Number.parseFloat(screen.textContent);}
        screen.textContent = "";
        nextClick = true;
    }
    else if(this.textContent === "÷"){
        operator = "/";
        if(screen.textContent != ""){num1 = Number.parseFloat(screen.textContent);}
        screen.textContent = "";
        nextClick = true;
    }
    else if(this.textContent === "-"){
        operator = "-";
        if(screen.textContent != ""){num1 = Number.parseFloat(screen.textContent);}
        screen.textContent = "";
        nextClick = true;
    }
    else if(this.textContent === "%"){
        operator = "%";
        if(screen.textContent != ""){num1 = Number.parseFloat(screen.textContent);}
        screen.textContent = "";
        nextClick = true;
    }
    else if(this.textContent === "Exp"){
        operator = "Exp";
        if(screen.textContent != ""){num1 = Number.parseFloat(screen.textContent);}
        screen.textContent = "";
        nextClick = true;
    }
    else if(this.textContent === "+/-"){
        operator = "";
        console.log(screen.textContent)
        screen.textContent = screen.textContent;
        if(screen.textContent.charAt(0) === "-"){
            screen.textContent = screen.textContent.substring(1);
        }
        else{
            screen.textContent = '-'+ screen.textContent;
        }
        
    }


}

function printSymbol(e){
    let screen = document.querySelector('.calcScreen');
    if(this.classList.contains("AC")){
        screen.textContent = "";
        num1 = num2 = operator = "";

    }
    else if(this.classList.contains('DEL')){screen.textContent = screen.textContent.slice(0,-1);}
    else if(this.classList.contains('operator')){return;}
    else if(this.textContent === "."){
        if(screen.textContent.indexOf(".")===-1){
            screen.textContent += ".";
        }
    }
    else{
        let text = this.getAttribute('id');
        screen.textContent += text;
    }
    

}

let num1;
let num2;
let sum;
let operator;
let nextClick;

let numbers = document.querySelectorAll('.button');
numbers.forEach(number => number.addEventListener('click', printSymbol));

let operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', setOperator));

let equals = document.querySelector(".equals");
equals.addEventListener("click", operate);

