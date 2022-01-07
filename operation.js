// + - */
import { dataBase, input } from "./index.js";

export const plusOperator = () => {
    for(let numberInfo of dataBase) {
        numberInfo.result = +numberInfo.numberOne + +numberInfo.numberTwo;
    }
}

export const minusOperator = () => {
    for(let numberInfo of dataBase) {
        numberInfo.result = +numberInfo.numberOne - +numberInfo.numberTwo;
    }
}

export const multiplicationOperator = () => {
    for(let numberInfo of dataBase) {  
        numberInfo.result = +numberInfo.numberOne * +numberInfo.numberTwo;
    }
}

export const divisionOperator = () => {
    for(let numberInfo of dataBase) {
        numberInfo.result = +numberInfo.numberOne / +numberInfo.numberTwo;   
    }
}

// radical-2 ** *** percent
export const radicalTwo = (dataBaseLength) => {
    for(let numberInfo of dataBase) {
        numberInfo.result = Math.sqrt(+numberInfo.numberOne);
    }
}

export const power = (dataBaseLength) => {
    for(let numberInfo of dataBase) {
        if (numberInfo.operator === 'sqr ') {
            numberInfo.result = Math.pow(+numberInfo.numberOne,2);  
        } else if (numberInfo.operator === 'sqr(3) ') {
            numberInfo.result = Math.pow(+numberInfo.numberOne,3); 
        }
    }
}

export const divisionOne = (dataBaseLength) => {
    for(let numberInfo of dataBase) {
        numberInfo.result = 1 / +numberInfo.numberOne;
    }
}
