import {dataBase,input,upperInput} from "./index.js";


export const clearAll = (dataBaseLength) => {
    for(let numberInfo of dataBase) {
        if (numberInfo.id === dataBaseLength) {
            if (!numberInfo.equalStatus) {
                numberInfo.numberOne = '0';
                numberInfo.numberTwo = '0';
                numberInfo.waitingForOperator = false;
                numberInfo.operator = null;
                input.textContent = '0';
                upperInput.textContent = '';   
            } else {
                input.textContent = '0';
                upperInput.textContent = '';
            }
        }
    }
}

export const clearEntry = (dataBaseLength) => {
    for(let numberInfo of dataBase) {
        if (numberInfo.id === dataBaseLength) {
            if (!numberInfo.equalStatus) {
                if (numberInfo.waitingForOperator) {
                    numberInfo.numberTwo = '0';
                } else {
                    numberInfo.numberOne = '0'
                }
                input.textContent = '0';
            } else {
                input.textContent = '0';
                upperInput.textContent = '';
            }
        }
    }
}

export const backSpace = (dataBaseLength) => {
    for(let numberInfo of dataBase) {
            if (numberInfo.id == dataBaseLength) {

                if (!numberInfo.waitingForOperator) {
                    numberInfo.numberOne = numberInfo.numberOne.substring(0,numberInfo.numberOne.length - 1);
                    if (numberInfo.equalStatus) {
                        upperInput.textContent = '';
                    } else {
                        input.textContent = numberInfo.numberOne;
                    }
                } else {
                    numberInfo.numberTwo = numberInfo.numberTwo.substring(0,numberInfo.numberTwo.length - 1);
                    input.textContent = numberInfo.numberTwo;
                }
            }
        }
}


