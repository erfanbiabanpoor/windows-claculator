import { clearAll, clearEntry, backSpace } from "./clear.js";
import {
  plusOperator,
  minusOperator,
  multiplicationOperator,
  divisionOperator,
  radicalTwo,
  power,
  divisionOne,
} from "./operation.js";
import { displayHistory, showHistory } from "./history.js";
import { convertNumber } from "./negative.js";
import { memoryButtonClick, showMemory } from "./memory.js";

export const input = document.querySelector(".currentInput");
export const upperInput = document.querySelector(".previousInput");
debugger;
export let dataBase = [
  {
    numberOne: "0",
    numberTwo: "0",
    waitingForOperator: false,
    operator: null,
    equalStatus: false,
    id: 0,
    result: null,
    memoryStatus: false,
  },
];

const dataBaseNumber = () => {
  let numberObj = {
    numberOne: "0",
    numberTwo: "0",
    waitingForOperator: false,
    operator: null,
    id: dataBase.length,
    equalStatus: false,
    result: null,
  };
  dataBase.push(numberObj);

  console.log(dataBase, String(Math.abs(input.textContent) * -1));
};

const buttonsValue = () => {
  const calculatorMain = document.querySelector(".numbers");

  calculatorMain.addEventListener("click", (event) => {
    const eventTarget = event.target;
    let dataBaseLength = dataBase.length - 1;

    if (eventTarget.classList.contains("number"))
      changeNumbers(eventTarget.value, dataBaseLength);
    if (eventTarget.classList.contains("operation"))
      changeOperator(eventTarget.value, dataBaseLength);
    if (eventTarget.classList.contains("dot"))
      inputDecimal(eventTarget.value, dataBaseLength);
    if (eventTarget.classList.contains("CE")) clearEntry(dataBaseLength);
    if (eventTarget.classList.contains("C")) clearAll(dataBaseLength);
    if (eventTarget.classList.contains("plus_minus"))
      convertNumber(dataBaseLength);
    if (eventTarget.classList.contains("delete")) backSpace(dataBaseLength);
    if (eventTarget.classList.contains("equal")) {
      equal(dataBaseLength);
    }
    updateDisplay(dataBaseLength);
  });
};

// const changeNavbarStyle = () => {
//   const historyButton = document.querySelector(".historylink");
//   const memoryButton = document.querySelector(".memorylink");
//   debugger;

//   historyButton.addEventListener("click", (event) => {
//     showHistory(event.target);
//   });

//   memoryButton.addEventListener("click", (event) => {
//     showMemory(event.target);
//   });
// };

const equal = (dataBaseLength) => {
  for (let numberInfo of dataBase) {
    if (numberInfo.id == dataBaseLength) {
      if (numberInfo.operator == null) {
        console.log("Your input is empty");
      } else {
        numberInfo.equalStatus = true;
        checkOperator(numberInfo.operator, dataBaseLength);
        dataBaseNumber();
      }
    }
  }
};

const updateDisplay = (dataBaseLength) => {
  for (let numberInfo of dataBase) {
    if (numberInfo.id == dataBaseLength) {
      if (numberInfo.equalStatus) {
        displayEasyOperator(upperInput, dataBaseLength);
        input.textContent = numberInfo.result;
        displayHistory(dataBaseLength);
      } else {
        if (!numberInfo.waitingForOperator) {
          upperInput.textContent = "";
          input.textContent = numberInfo.numberOne;
        } else {
          if (numberInfo.numberOne === "0") {
            numberInfo.numberOne = input.textContent;
            upperInput.textContent = `${numberInfo.numberOne} ${numberInfo.operator}`;
          } else {
            upperInput.textContent = "";
            if (
              numberInfo.operator === "√" ||
              numberInfo.operator === "sqr " ||
              numberInfo.operator === "sqr(3) " ||
              numberInfo.operator === "1/"
            ) {
              input.textContent = "";
              upperInput.textContent = `${numberInfo.operator} ${numberInfo.numberOne}`;
              input.textContent = numberInfo.numberOne;
            } else {
              upperInput.textContent = `${numberInfo.numberOne} ${numberInfo.operator}`;
              if (numberInfo.numberTwo === "0") {
                return;
              } else {
                input.textContent = numberInfo.numberTwo;
              }
            }
          }
        }
      }
    }
  }
};

const displayEasyOperator = (upperInput, dataBaseLength) => {
  for (let numberInfo of dataBase) {
    if (numberInfo.id == dataBaseLength) {
      if (
        numberInfo.operator === "+" ||
        numberInfo.operator === "-" ||
        numberInfo.operator === "*" ||
        numberInfo.operator === "÷"
      ) {
        upperInput.textContent = `${numberInfo.numberOne} ${numberInfo.operator} ${numberInfo.numberTwo} =`;
      } else {
        upperInput.textContent = ` ${numberInfo.operator} ${numberInfo.numberOne} =`;
      }
    }
  }
};

const changeNumbers = (numberValue, dataBaseLength) => {
  for (let numberInfo of dataBase) {
    if (numberInfo.id == dataBaseLength) {
      if (!numberInfo.waitingForOperator) {
        if (numberInfo.numberOne === "0") {
          numberInfo.numberOne = numberValue;
        } else {
          numberInfo.numberOne += numberValue;
        }
      } else {
        if (numberInfo.numberTwo === "0") {
          numberInfo.numberTwo = numberValue;
        } else {
          numberInfo.numberTwo += numberValue;
        }
      }
    }
  }
};

const inputDecimal = (dotValue, dataBaseLength) => {
  for (let numberInfo of dataBase) {
    if (numberInfo.id == dataBaseLength) {
      const replacement = ".";
      if (!numberInfo.waitingForOperator) {
        if (!numberInfo.numberOne.includes(dotValue)) {
          numberInfo.numberOne += dotValue;
        } else {
          numberInfo.numberOne = numberInfo.numberOne.replace(
            /,([^,]*)$/,
            replacement + "$1"
          );
        }
      } else {
        if (!numberInfo.numberTwo.includes(dotValue)) {
          numberInfo.numberTwo += dotValue;
        } else {
          numberInfo.numberTwo = numberInfo.numberTwo.replace(
            /,([^,]*)$/,
            replacement + "$1"
          );
        }
      }
    }
  }
};

const changeOperator = (operatorValue, dataBaseLength) => {
  for (let numberInfo of dataBase) {
    if (numberInfo.id == dataBaseLength) {
      if (operatorValue === "negative()") {
        return;
      } else {
        numberInfo.operator = operatorValue;
        numberInfo.waitingForOperator = true;
      }
    }
  }
};

const checkOperator = (operator, dataBaseLength) => {
  switch (operator) {
    case "+":
      plusOperator(dataBaseLength);
      break;
    case "-":
      minusOperator(dataBaseLength);
      break;
    case "*":
      multiplicationOperator(dataBaseLength);
      break;
    case "÷":
      divisionOperator(dataBaseLength);
      break;
    case "√":
      radicalTwo(dataBaseLength);
      break;
    case "sqr ":
      power(dataBaseLength);
      break;
    case "sqr(3) ":
      power(dataBaseLength);
      break;
    case "1/":
      divisionOne(dataBaseLength);
      break;
    case "negative()":
      convertNumber(dataBaseLength);
    default:
      console.log("input is empty");
  }
};
// changeNavbarStyle();
buttonsValue();
memoryButtonClick();
