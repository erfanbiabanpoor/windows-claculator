import { dataBase } from "./index.js"

const asidePh = document.getElementsByClassName('ph')[0];
const historyItem = document.querySelector('.items');
const memoryButton = document.querySelector('.memory-link');
const historyMain = document.querySelector('.history-section');
const memoryMain = document.querySelector('.memory-section');
const trashHistory = document.querySelector('.claer-history');

export const showHistory = (historyButton) => {
    
    memoryButton.classList.remove('default-link');
    historyButton.classList.add('default-link');
    trashHistory.style.display = 'block';
    if(historyMain.className.includes('default-section')) {
        historyMain.classList.remove('default-section')
        memoryMain.classList.add('default-section');
    }
}


export const displayHistory = (dataBaseLength) => {
    
    const item = document.createElement('div');
    const itemInput = document.createElement('p');
    const itemUpperInput = document.createElement('p');
    const aside = document.querySelector('.aside')

    asidePh.style.display = "none";
    item.classList.add('history-item');
    historyItem.appendChild(item);
    item.appendChild(itemUpperInput);
    item.appendChild(itemInput);
    itemUpperInput.classList.add('item-upperInput');
    itemInput.classList.add('item-input');

    for (let numberInfo of dataBase) {
        if (numberInfo.id == dataBaseLength) {
            if (numberInfo.operator === '√' || numberInfo.operator === 'sqr ' || numberInfo.operator === 'sqr(3) ') {
                itemUpperInput.textContent = `${numberInfo.numberOne} ${numberInfo.operator} `;
            } else if (numberInfo.operator === '1/') {
                itemUpperInput.textContent = `${numberInfo.operator} ${numberInfo.numberOne}`;
            }
             else {
                itemUpperInput.textContent = `${numberInfo.numberOne} ${numberInfo.operator} ${numberInfo.numberTwo} = `;
            }
            itemInput.textContent = `${numberInfo.resualt}`;
        }
    }
    aside.addEventListener('click', event => {
        if(event.target.classList.contains('claer-history')) clearHistory();
    })

}

const clearHistory = () => {
    const item = document.querySelectorAll('.history-item');

    item.forEach(item => {
        item.remove();
    })
    if (historyItem.children.length == '0') {
        asidePh.style.display = 'block';
    } else {
        asidePh.style.display = 'none';
    }
}
