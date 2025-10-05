const eqevent = new MouseEvent('click', {
    bubbles : true,
    cancelable : true
});
const equate = document.querySelector('#equate');
let operation = null;
let num1 = null;
let num2 = null;
let op = "";
let num2exp = "";
let num1exp = "";
const numpad = document.querySelector('.keypad');
const display = document.querySelector('#display');
const major = document.querySelector('.major');
numpad.addEventListener('click', element => {
    const target = element.target;
    if(!target.classList.contains('button')) return;
    target.style.backgroundColor = `rgba(
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)},
                                    ${0.7})`;
        switch(target.id){
            case "1" :
                display.textContent += "1";
                if(operation%3 == 0) num1exp += "1";
                else num2exp += "1";
                break;
            case "2" :
                display.textContent += "2";
                if(operation%3 == 0) num1exp += "2";
                else num2exp += "2";
                break;
            case "3" :
                display.textContent += "3";
                if(operation%3 == 0) num1exp += "3";
                else num2exp += "3";
                break;
            case "4" :
                display.textContent += "4";
                if(operation%3 == 0) num1exp += "4";
                else num2exp += "4";
                break;
            case "5" :
                display.textContent += "5";
                if(operation%3 == 0) num1exp += "5";
                else num2exp += "5";
                break;
            case "6" :
                display.textContent += "6";
                if(operation%3 == 0) num1exp += "6";
                else num2exp += "6";
                break;
            case "7" :
                display.textContent += "7";
                if(operation%3 == 0) num1exp += "7";
                else num2exp += "7";
                break;
            case "8" :
                display.textContent += "8";
                if(operation%3 == 0) num1exp += "8";
                else num2exp += "8";
                break;
            case "9" :
                display.textContent += "9";
                if(operation%3 == 0) num1exp += "9";
                else num2exp += "9";
                break;
            case "0" :
                display.textContent += "0";
                if(operation%3 == 0) num1exp += "0";
                else num2exp += "0";
                break;
            case "add" :
                if(operation%3 == 2){
                    equate.dispatchEvent(eqevent);
                }
                if(operation%3 == 0)operation++;
                if(operation%3 == 1){
                    display.textContent += "+";
                    op = "+";
                    operation++;
                }
                break;
            case "subtract" :
                if(operation%3 == 2){
                    equate.dispatchEvent(eqevent);
                }
                if(operation%3 == 0)operation++;
                if(operation%3 == 1){
                    display.textContent += "-";
                    op = "-";
                    operation++;
                }
                break;
            case "multiply" :
                if(operation%3 == 2){
                    equate.dispatchEvent(eqevent);
                }
                if(operation%3 == 0)operation++;
                if(operation%3 == 1){
                    display.textContent += "*";
                    op = "*";
                    operation++;
                }
                break;
            case "divide" :
                if(operation%3 == 2){
                    equate.dispatchEvent(eqevent);
                }
                if(operation%3 == 0)operation++;
                if(operation%3 == 1){
                    display.textContent += "/";
                    op = "/";
                    operation++;
                }
                break;
            case "decimal" :
                if(operation%3 == 0 && !num1exp.includes(".")){
                    display.textContent += ".";
                    num1exp += '.';
                }else if(operation%3 == 2 && !num2exp.includes(".")){
                    display.textContent += ".";
                    num2exp += '.';
                }
                break;
            case "sign" :
                if(operation%3 == 0){
                    num1 = parseFloat(num1exp);
                    num1 *= -1;
                    num1exp = '' + num1;
                    num1 = null;
                    display.textContent = num1exp;
                }
                if(operation%3 == 2){
                    num2 = parseFloat(num2exp);
                    let len = num2exp.length;
                    num2 *= -1;
                    num2exp = '' + num2;
                    num2 = null;
                    display.textContent = display.textContent
                    .slice(0, display.textContent.length - len) + num2exp;
                }
                break;
            
            
        }
});

major.addEventListener('click', element => {
    target = element.target;
    if(!target.classList.contains('button')) return;
    target.style.backgroundColor = `rgba(
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)},
                                    ${0.7})`;
    switch(target.id){
        case 'equate' :
            num1 = parseFloat(num1exp);
            num2 = parseFloat(num2exp);
            switch(op){
                case "+":
                    num1 = num1 + num2;
                    num1 = Math.round(num1*100000)/100000;
                    num1exp = "" + num1;
                    num2exp= "";
                    operation++;
                    display.textContent = "" + num1;
                    break;
                case "-":
                    num1 = num1 - num2;
                    num1 = Math.round(num1*100000)/100000;
                    num1exp = "" + num1;
                    num2exp= "";
                    operation++;
                    display.textContent = "" + num1;
                    break;
                case "/":
                    num1 = num1 / num2;
                    num1 = Math.round(num1*100000)/100000;
                    num1exp = "" + num1;
                    num2exp= "";
                    operation++;
                    display.textContent = "" + num1;
                    break;
                case "*":
                    num1 = num1 * num2;
                    num1 = Math.round(num1*100000)/100000;
                    num1exp = "" + num1;
                    num2exp= "";
                    operation++;
                    display.textContent = "" + num1;
                    break;
            }
            break;
        case 'clear':
            num1 = null;
            num2 = null;
            operation = 0;
            op = "";
            num1exp = "";
            num2exp = "";
            display.textContent = "";
        break;
        case 'delete':
            let len = display.textContent.length - 1;
            let delchar = display.textContent.charAt(len);
            let ops = '+-/*'
            if(ops.includes(delchar)){
                operation = operation - 2;
                op = "";
                display.textContent = display.textContent.slice(0,-1);
            }else{
                if(operation%3 == 0){
                    num1exp = num1exp.slice(0,-1);
                    display.textContent = num1exp;
                }else if(operation%3 == 2){
                    num2exp = num2exp.slice(0,-1);
                    display.textContent = display.textContent.slice(0,-1);
                }
            }
        break;
    }       
});

// numpad.addEventListener('mouseover', element => {
//     const target = element.target;
//     if(!target.classList.contains('button')) return;
//     target.style.backgroundColor = `rgb(
//                                     ${Math.floor(Math.random() * 256)},
//                                     ${Math.floor(Math.random() * 256)},
//                                     ${Math.floor(Math.random() * 256)})`
// });

// major.addEventListener('mouseover', element => {
//     const target = element.target;
//     if(!target.classList.contains('button')) return;
//     target.style.backgroundColor = `rgb(
//                                     ${Math.floor(Math.random() * 256)},
//                                     ${Math.floor(Math.random() * 256)},
//                                     ${Math.floor(Math.random() * 256)})`
// });