export const input = document.getElementById(".input");

export let Array = [
  {
    num_1: "0",
    num_2: "0",
    inQueueOperator: false,
    operator: null,
    equal: false,
    result: "0",
    memory: false,
    id: 0,
  },
];

const ArrayValue = () => {
  let object = {
    num_1: "0",
    num_2: "0",
    inQueueOperator: false,
    operator: null,
    equal: false,
    result: "0",
    memory: false,
    id: Array.length,
  };
  Array.push(object);
};
const buttonValue = () => {
  const calculatorMain = document.querySelector("division");

  calculatorMain.addEventListener("click", (event) => {
    const eventTarget = event.target;
    let dataBaseLength = Array.length - 1;

    if (eventTarget.classList.contains("number"))
      changeNumbers(eventTarget.value, dataBaseLength);
    if (eventTarget.classList.contains("operator"))
      changeOperator(eventTarget.value, dataBaseLength);
    if (eventTarget.classList.contains("decimal"))
      inputDecimal(eventTarget.value, dataBaseLength);
    if (eventTarget.classList.contains("clear-entry"))
      clearEntry(dataBaseLength);
    if (eventTarget.classList.contains("clear-all")) clearAll(dataBaseLength);
    if (eventTarget.classList.contains("negative"))
      convertNumber(dataBaseLength);
    if (eventTarget.classList.contains("back-space")) backSpace(dataBaseLength);
    if (eventTarget.classList.contains("equal")) {
      equal(dataBaseLength);
    }
  });
};
const changeNavbarStyle = () => {
  const historyButton = document.querySelector(".historylink");
  const memoryButton = document.querySelector(".memorylink");

  historyButton.addEventListener("click", (event) => {
    showHistory(event.target);
  });

  memoryButton.addEventListener("click", (event) => {
    showMemory(event.target);
  });
};











changeNavbarStyle();
buttonValue();
