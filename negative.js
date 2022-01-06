import { dataBase} from "./index.js";

export const convertNumber = (dataBaseLength) => {
    for(let numberInfo of dataBase) {
        if (numberInfo.id == dataBaseLength) {
            if (numberInfo.equalStatus) {
                if (numberInfo.resualt > 0) {
                    numberInfo.resualt = String(Math.abs(numberInfo.resualt) * -1);
                } else if (numberInfo.resualt < 0) {
                    numberInfo.resualt = String(Math.abs(numberInfo.resualt));
                }
            } else {
                if (numberInfo.waitingForOperator) {
                    if (numberInfo.numberTwo > 0) {
                        numberInfo.numberTwo = String(Math.abs(numberInfo.numberTwo) * -1)
                    } else if (numberInfo.numberTwo < 0) {
                        numberInfo.numberTwo = String(Math.abs(numberInfo.numberTwo))
                    }
                } else  {
                    if (numberInfo.numberOne > 0) {
                        numberInfo.numberOne = String(Math.abs(numberInfo.numberOne) * -1)
                    } else if (numberInfo.numberOne < 0) {
                        numberInfo.numberOne = String(Math.abs(numberInfo.numberOne))
                    }
                }
            }
        }
    } 
}